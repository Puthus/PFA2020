package iir5.pfa.g7.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import iir5.pfa.g7.models.User;
import iir5.pfa.g7.repository.UserRepository;

@RestController
@CrossOrigin(origins={"http://localhost:4200","http://localhost:4201"})
@RequestMapping("users")
public class UsersController {

	@Autowired
	private UserRepository UserJpaRepository;

	@GetMapping("/list")
	public Map<String, Object> list() {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			List<User> UserList;
			UserList = UserJpaRepository.findAll();
			response.put("message", "Successful load");
			response.put("list", UserList);
			response.put("success", true);
			return response;

		} catch (Exception e) {
			response.put("message", e.getMessage());
			response.put("success ", false);
			return response;
		}

	}

	@GetMapping(value = "/{username}")
	public User findByNom(@PathVariable final String username) {
		return UserJpaRepository.findByUsername(username).isPresent() ? UserJpaRepository.findByUsername(username).get():null;
	}

	@PostMapping(value = "/create")
	public void save(@RequestBody final User User) {
		UserJpaRepository.save(User);
	}

	@DeleteMapping(value = "/delete/{id}")
	public Map<String, Object> delete(@PathVariable("id") long id) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			UserJpaRepository.deleteById(id);
			response.put("message", "Successful delete");
			response.put("success", true);
			return response;
		} catch (Exception e) {
			response.put("message", e.getMessage());
			response.put("success", false);
			return response;
		}

	}

	@GetMapping(value = "mod/{id}")
	public Map<String, Object> mod(@PathVariable("id") long id) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {

			Optional<User> User = UserJpaRepository.findById(id);

			if (User.isPresent()) {
				response.put("message", "Successful load");
				response.put("data", User);
				response.put("success", true);
				return response;
			} else {
				response.put("message", "Not found data");
				response.put("data", null);
				response.put("success", false);
				return response;
			}

		} catch (Exception e) {
			response.put("message", "" + e.getMessage());
			response.put("success", false);
			return response;
		}
	}

	@PutMapping(value = "/update/{id}")
	public Map<String, Object> update(@PathVariable("id") Integer id, @RequestBody User data) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			data.setId(id);
			UserJpaRepository.save(data);
			response.put("message", "Successful update");
			response.put("success", true);
			return response;
		} catch (Exception e) {
			response.put("message", e.getMessage());
			response.put("success", false);
			return response;
		}

	}
}
