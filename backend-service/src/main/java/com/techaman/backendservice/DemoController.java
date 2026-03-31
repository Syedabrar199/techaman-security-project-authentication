package com.techaman.backendservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
public class DemoController {

    @GetMapping("/api/public")
    public String publicApi() {
        return "This is PUBLIC: Anyone can see this without logging in.";
    }

    @GetMapping("/api/private")
    public String privateApi() {
        return "This is PRIVATE: You see this because Keycloak verified your token!";
    }
}