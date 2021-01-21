package iir5.pfa.g7.controllers;

import java.util.HashSet;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import iir5.pfa.g7.controllers.response.JwtResponse;
import iir5.pfa.g7.controllers.response.ResponseMessage;
import iir5.pfa.g7.models.Role;
import iir5.pfa.g7.models.RoleName;
import iir5.pfa.g7.models.User;
import iir5.pfa.g7.models.AdminRegional;
import iir5.pfa.g7.models.Recenseur;
import iir5.pfa.g7.models.Gestionnaire;
import iir5.pfa.g7.repository.RoleRepository;
import iir5.pfa.g7.repository.AdminRegionalRepository;
import iir5.pfa.g7.repository.RecenseurRepository;
import iir5.pfa.g7.repository.GestionnaireRepository;
import iir5.pfa.g7.repository.UserRepository;
import iir5.pfa.g7.request.LoginForm;
import iir5.pfa.g7.request.SignUpForm;
import iir5.pfa.g7.security.jwt.JwtProvider;

@CrossOrigin(origins={"*"}, maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthRestAPIs {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	AdminRegionalRepository adminRepository;
	@Autowired
	RecenseurRepository recenseurRepository;
	@Autowired
	GestionnaireRepository gestionaireRepository;
	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtProvider jwtProvider;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginForm loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		String jwt = jwtProvider.generateJwtToken(authentication);
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();

		return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
	}

	@PostMapping("/sign-out")
	public ResponseEntity<?> signoutUser(@RequestBody LoginForm loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		String jwt = jwtProvider.generateJwtToken(authentication);
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();

		return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody SignUpForm signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return new ResponseEntity<>(new ResponseMessage("Fail -> Username is already taken!"),
					HttpStatus.BAD_REQUEST);
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return new ResponseEntity<>(new ResponseMessage("Fail -> Email is already in use!"),
					HttpStatus.BAD_REQUEST);
		}

		// Creating user's account
		User user = new User(signUpRequest.getNom(), signUpRequest.getPrenom(), signUpRequest.getUsername(),
				signUpRequest.getEmail(), encoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();
		boolean erreur = false;
		if (!strRoles.isEmpty()) {
			switch (strRoles.iterator().next()) {
			case "admin":
				Role adminRole = roleRepository.findByName(RoleName.ROLE_ADMIN)
						.orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
				roles.add(adminRole);
				user.setRoles(roles);
				AdminRegional a = new AdminRegional(user);
				adminRepository.save(a);
				break;
			case "gestionnaire":
				Role pmRole = roleRepository.findByName(RoleName.ROLE_GESTIONNAIRE)
						.orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
				roles.add(pmRole);
				user.setRoles(roles);
				Gestionnaire g = new Gestionnaire(user);
				gestionaireRepository.save(g);
				break;
			case "recenseur":
				Role userRole = roleRepository.findByName(RoleName.ROLE_RECENSEUR)
						.orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
				roles.add(userRole);
				user.setRoles(roles);
				Recenseur r = new Recenseur(user);
				recenseurRepository.save(r);
				break;
			default:
				erreur = true;
			}
		}
		Authentication authentication = authenticationManager.authenticate(
			new UsernamePasswordAuthenticationToken(signUpRequest.getUsername(), signUpRequest.getPassword()));

	SecurityContextHolder.getContext().setAuthentication(authentication);

	String jwt = jwtProvider.generateJwtToken(authentication);
	UserDetails userDetails = (UserDetails) authentication.getPrincipal();

	return !erreur ? ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities())):new ResponseEntity<>(new ResponseMessage("User Role was Not Found!","asdfasdfasdf"), HttpStatus.BAD_REQUEST); 
	}
}