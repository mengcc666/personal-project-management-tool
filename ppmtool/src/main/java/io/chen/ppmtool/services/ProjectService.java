package io.chen.ppmtool.services;

import io.chen.ppmtool.domain.Project;
import io.chen.ppmtool.exceptions.ProjectIdException;
import io.chen.ppmtool.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project) {
        // Logic
        try {
            project.setProjectIdentifier((project.getProjectIdentifier()).toUpperCase());
            return projectRepository.save(project);
        } catch (Exception e) {
            throw new ProjectIdException("Project ID'" + project.getProjectIdentifier().toUpperCase() + "' already exists");

        }
    }
}
