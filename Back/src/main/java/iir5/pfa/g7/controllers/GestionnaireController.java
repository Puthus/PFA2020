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

import iir5.pfa.g7.models.Gestionnaire;
import iir5.pfa.g7.repository.GestionnaireRepository;

@RestController
@RequestMapping("gestionnaires")
public class GestionnaireController {

	@Autowired
	private GestionnaireRepository gestionnaireJpaRepository;

	@GetMapping("/list")
	public Map<String, Object> list() {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			List<Gestionnaire> gestList;
			gestList = gestionnaireJpaRepository.findAll();
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
	public Gestionnaire findByNom(@PathVariable final String nom) {
		return gestionnaireJpaRepository.findByNom(nom);
	}

	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public void save(@RequestBody final Gestionnaire gest) {
		gestionnaireJpaRepository.save(gest);
	}

	@DeleteMapping(value = "/delete/{id}")
	public Map<String, Object> delete(@PathVariable("id") int id) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			gestionnaireJpaRepository.deleteById(id);
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

			Optional<Gestionnaire> gest = gestionnaireJpaRepository.findById(id);

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
	public Map<String, Object> update(@PathVariable("id") int id, @RequestBody Gestionnaire data) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			data.setId(id);
			gestionnaireJpaRepository.save(data);
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
