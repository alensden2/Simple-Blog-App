package com.asdc.pawpals.service.implementation;

import com.asdc.pawpals.repository.MedicalRecordRepository;
import com.asdc.pawpals.service.MedicalRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
@Component
public class MedicalRecordServiceImpl implements MedicalRecordService {

    @Autowired
    MedicalRecordRepository medicalRecordRepository;

}
