package com.pl.premier_zone.player;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="player_stats")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", unique=true) Long id;

    @Column(name = "player_name")
    private String name; 

    @Column(name = "nation")
    private String nation;

    @Column(name = "position")
    private String position;

    @Column(name = "age")
    private Integer age;

    @Column(name = "matches_played")
    private Integer mp;
   
    @Column(name = "starts")
    private Integer starts;
   
    @Column(name = "minutes_played")
    private Double mins;
   
    @Column(name = "goals")
    private Double goals;
   
    @Column(name = "assists")
    private Double assists;
   
    @Column(name = "penalty_kicks")
    private Double pk;
   
    @Column(name = "yellow_cards")
    private Double yellow;
   
    @Column(name = "red_cards")
    private Double red;
   
    @Column(name = "expected_goals")
    private Double xg;
   
    @Column(name = "expected_goals_and_assists")
    private Double xag;
   
    @Column(name = "team_name")
    private String team;

    // Getters and Setters
    public Player(Long id, String name, String nation, String position, Integer age, Integer mp, Integer starts, Double mins, Double goals, Double assists, Double pk, Double yellow, Double red, Double xg, Double xag, String team) {
        this.id = id;
        this.name = name;
        this.nation = nation;
        this.position = position;
        this.age = age;
        this.mp = mp;
        this.starts = starts;
        this.mins = mins;
        this.goals = goals;
        this.assists = assists;
        this.pk = pk;
        this.yellow = yellow;
        this.red = red;
        this.xg = xg;
        this.xag = xag;
        this.team = team;
    }

    protected Player() {
    // required by JPA
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getMp() {
        return mp;
    }

    public void setMp(Integer mp) {
        this.mp = mp;
    }

    public Integer getStarts() {
        return starts;
    }

    public void setStarts(Integer starts) {
        this.starts = starts;
    }

    public Double getMins() {
        return mins;
    }

    public void setMins(Double mins) {
        this.mins = mins;
    }

    public Double getGoals() {
        return goals;
    }

    public void setGoals(Double goals) {
        this.goals = goals;
    }

    public Double getAssists() {
        return assists;
    }

    public void setAssists(Double assists) {
        this.assists = assists;
    }

    public Double getPk() {
        return pk;
    }

    public void setPk(Double pk) {
        this.pk = pk;
    }

    public Double getYellow() {
        return yellow;
    }

    public void setYellow(Double yellow) {
        this.yellow = yellow;
    }

    public Double getRed() {
        return red;
    }

    public void setRed(Double red) {
        this.red = red;
    }

    public Double getXg() {
        return xg;
    }

    public void setXg(Double xg) {
        this.xg = xg;
    }

    public Double getXag() {
        return xag;
    }

    public void setXag(Double xag) {
        this.xag = xag;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

}
