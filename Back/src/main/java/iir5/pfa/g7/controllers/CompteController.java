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

import iir5.pfa.g7.models.Compte;
import iir5.pfa.g7.repository.CompteRepository;

@RestController
@RequestMapping("comptes")
public class CompteController {

	@Autowired
	private CompteRepository CompteJpaRepository;

	@GetMapping("/list")
	public Map<String, Object> list() {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			List<Compte> CompteList;
			CompteList = CompteJpaRepository.findAll();
			response.put("message", "Successful load");
			response.put("list", CompteList);
			response.put("success", true);
			return response;

		} catch (Exception e) {
			response.put("message", e.getMessage());
			response.put("success ", false);
			return response;
		}

	}

	@GetMapping(value = "/{name}")
	public Compte findByNom(@PathVariable final String nom) {
		return CompteJpaRepository.findByNumero(nom);
	}

	@PostMapping(value = "/create")
	public void save(@RequestBody final Compte Compte) {
		CompteJpaRepository.save(Compte);
	}

	@DeleteMapping(value = "/delete/{id}")
	public Map<String, Object> delete(@PathVariable("id") long id) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			CompteJpaRepository.deleteById(id);
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

			Optional<Compte> Compte = CompteJpaRepository.findById(id);

			if (Compte.isPresent()) {
				response.put("message", "Successful load");
				response.put("data", Compte);
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
	public Map<String, Object> update(@PathVariable("id") Integer id, @RequestBody Compte data) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			data.setId(id);
			CompteJpaRepository.save(data);
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
