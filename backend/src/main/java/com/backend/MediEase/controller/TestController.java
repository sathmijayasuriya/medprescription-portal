package com.backend.MediEase.controller;


import com.backend.MediEase.constants.RestURI;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(RestURI.BASE_URL)
public class TestController {

    @GetMapping(RestURI.TEST)
    public String getTest(){
        return "test passed";
    }
}
