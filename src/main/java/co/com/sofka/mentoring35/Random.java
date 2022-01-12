package co.com.sofka.mentoring35;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Random {
    @Id
    private String id;

    private String orginalList;

    private String randomList;

    public String getRandomList() {
        return randomList;
    }

    public String getId() {
        return id;
    }

    public void setIde(String id) {
        this.id = id;
    }


    public String getOrginalList() {
        return orginalList;
    }

    public void setOrginalList(String orginalList) {
        this.orginalList = orginalList;
    }

    public void setRandomList(String randomList) {
        this.randomList = randomList;
    }

    
}