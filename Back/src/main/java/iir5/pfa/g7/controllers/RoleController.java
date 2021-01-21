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

import iir5.pfa.g7.models.Role;
import iir5.pfa.g7.repository.RoleRepository;

@RestController
@CrossOrigin(origins={"http://localhost:4200","http://localhost:4201"})
@RequestMapping("roles")
public class RoleController
 {

	@Autowired
	private RoleRepository RoleJpaRepository;

	@CrossOrigin(origins={"http://localhost:4200","http://localhost:4201"})
	@GetMapping("/list")
	public Map<String, Object> list() {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			List<Role> RoleList;
			RoleList = RoleJpaRepository.findAll();
			response.put("message", "Successful load");
			response.put("list", RoleList);
			response.put("success", true);
			return response;

		} catch (Exception e) {
			response.put("message", e.getMessage());
			response.put("success ", false);
			return response;
		}

	}

	@PostMapping(value = "/create")
	public void save(@RequestBody final Role Role) {
		RoleJpaRepository.save(Role);
	}

	@DeleteMapping(value = "/delete/{id}")
	public Map<String, Object> delete(@PathVariable("id") long id) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			RoleJpaRepository.deleteById(id);
			;
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

			Optional<Role> Role = RoleJpaRepository.findById(id);

			if (Role.isPresent()) {
				response.put("message", "Successful load");
				response.put("data", Role);
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
	public Map<String, Object> update(@PathVariable("id") Integer id, @RequestBody Role data) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			data.setId(id);
			RoleJpaRepository.save(data);
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
