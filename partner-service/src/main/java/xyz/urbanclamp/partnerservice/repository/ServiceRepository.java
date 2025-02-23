package xyz.urbanclamp.partnerservice.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.urbanclamp.partnerservice.model.Category;
import xyz.urbanclamp.partnerservice.model.Service;

import java.util.List;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {
    Page<Service> findAll(Pageable pageable);
    List<Service> findByCategory(Category category);
}
