package iir5.pfa.g7.controllers;

import java.util.HashMap;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import iir5.pfa.g7.models.Recenseur;
import iir5.pfa.g7.repository.RecenseurRepository;

@RestController
@CrossOrigin(origins={"http://localhost:4200","http://localhost:4201"})
@RequestMapping("Recenseurs")
public class RecenseurController {

	@Autowired
	private RecenseurRepository RecenseurJpaRepository;

	@GetMapping("/list")
	public Map<String, Object> list() {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			List<Recenseur> gestList;
			gestList = RecenseurJpaRepository.findAll();
			response.put("message", "Successful load");
			response.put("list", gestList);
			response.put("success", true);
			return response;

		} catch (Exception e) {
			response.put("message", e.getMessage());
			response.put("success ", false);
			return response;
		}

	}

	@GetMapping(value = "/{name}")
	public Recenseur findByNom(@PathVariable final String nom) {
		return RecenseurJpaRepository.findByNom(nom);
	}

	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public void save(@RequestBody final Recenseur gest) {
		RecenseurJpaRepository.save(gest);
	}

	@DeleteMapping(value = "/delete/{id}")
	public Map<String, Object> delete(@PathVariable("id") int id) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			RecenseurJpaRepository.deleteById(id);
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
	public Map<String, Object> mod(@PathVariable("id") int id) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {

			Optional<Recenseur> gest = RecenseurJpaRepository.findById(id);

			if (gest.isPresent()) {
				response.put("message", "Successful load");
				response.put("data", gest);
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
	public Map<String, Object> update(@PathVariable("id") int id, @RequestBody Recenseur data) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			data.setId(id);
			RecenseurJpaRepository.save(data);
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
