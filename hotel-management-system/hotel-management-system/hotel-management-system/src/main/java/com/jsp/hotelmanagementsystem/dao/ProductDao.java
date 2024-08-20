package com.jsp.hotelmanagementsystem.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jsp.hotelmanagementsystem.entities.Hotel;
import com.jsp.hotelmanagementsystem.entities.Product;

@Repository
public class ProductDao {
	@Autowired
	EntityManagerFactory emf;

	@Autowired
	EntityManager em;

	@Autowired
	EntityTransaction et;

	public void saveProduct(Product Product) {
		et.begin();
		em.persist(Product);
		et.commit();
	}

	public Product findById(int id) {
		return em.find(Product.class, id);
	}

	public void updateProduct(Product Product) {
		et.begin();
		em.merge(Product);
		et.commit();
	}

	public void deleteById(int id) {
		et.begin();
		em.remove(em.find(Product.class, id));
		et.commit();
	}

	public List<Product> findAll() {
		Query query = em.createQuery("select p from Product p");
		return query.getResultList();
	}

	public List<Product> fetchProductsByHotel(String hotelName) {
		Query query = em.createQuery("select h from Hotel h where h.name=?1");
		query.setParameter(1, hotelName);

		Hotel hotel = (Hotel) query.getSingleResult();
		return hotel.getProducts();
	}

	public List<Product> fetchProductsBetweenPriceRange(double minCost, double maxCost) {
		Query query = em.createQuery("select p from Product p where p.cost between ?1 and ?2");
		query.setParameter(1, minCost);
		query.setParameter(2, maxCost);

		List<Product> products = query.getResultList();
		return products;

	}
}
