package com.backend.MediEase.constants;

public class RestURI {

    public static final String BASE_URL = "/api";
    public static final String USER_REGISTER = "/auth/user/register";
    public static final String USER_LOGIN = "/auth/user/login";
    public static final String ADMIN_REGISTER = "/auth/admin/register";
    public static final String ADMIN_LOGIN = "/auth/admin/login";
    public static final String TEST = "/test";

    //drug api
    public static final String ADD_DRUG = "/drug/addDrug";
    public static final String GET_ALL_DRUGS = "/drug/getAllDrugs";
    public static final String GET_DRUG_BY_ID = "/drug/getDrugById/{id}";

    //prescription
    public static final String ADD_PRESCRIPTION = "/prescriptions/addPrescription";
    public static final String GET_ALL_PRESCRIPTIONS = "/prescriptions/getAllPrescriptions";

    //Quotation



}
