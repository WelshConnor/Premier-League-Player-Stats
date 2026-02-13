package com.pl.premier_zone.player;

import java.util.List;
import java.util.stream.Collectors;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import jakarta.transaction.Transactional;

@Component
public class PlayerService {
    private final PlayerRepository playerRepository;

    @Autowired PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    public List<Player> getPlayersFromTeam(String teamName) {
        return playerRepository.findAll().stream()
                .filter(player -> teamName.equals(player.getTeam()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByName(String searchName) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getName().toLowerCase().contains(searchName.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByPosition(String searchPosition) {
    String sp = searchPosition.toLowerCase();
    return playerRepository.findAll().stream()
        .filter(p -> p.getPosition() != null && p.getPosition().toLowerCase().contains(sp))
        .collect(Collectors.toList());
    }


    public List<Player> getPlayersByNation(String searchNation) {
    String sn = searchNation.toLowerCase();
    return playerRepository.findAll().stream()
        .filter(p -> p.getNation() != null && p.getNation().toLowerCase().contains(sn))
        .collect(Collectors.toList());
    }


    public List<Player> getPlayersByTeamAndPosition(String team, String position) {
        return playerRepository.findAll().stream()
                .filter(player -> team.equals(player.getTeam()) && position.equals(player.getPosition()))
                .collect(Collectors.toList());
    }

    public Player addPlayer(Player player) {
        playerRepository.save(player);
        return player;
    }

    public Player updatePlayer(Long id, Player updatedPlayer) {
        Optional<Player> existingPlayer = playerRepository.findById(id);

        if (existingPlayer.isPresent()) {
            Player player = existingPlayer.get();
            player.setName(updatedPlayer.getName());
            player.setNation(updatedPlayer.getNation());
            player.setPosition(updatedPlayer.getPosition());
            player.setAge(updatedPlayer.getAge());
            player.setMp(updatedPlayer.getMp());
            player.setStarts(updatedPlayer.getStarts());
            player.setMins(updatedPlayer.getMins());
            player.setGoals(updatedPlayer.getGoals());
            player.setAssists(updatedPlayer.getAssists());
            player.setPk(updatedPlayer.getPk());
            player.setYellow(updatedPlayer.getYellow());
            player.setRed(updatedPlayer.getRed());
            player.setXg(updatedPlayer.getXg());
            player.setXag(updatedPlayer.getXag());
            player.setTeam(updatedPlayer.getTeam());

            playerRepository.save(player);
            return player;

        } else {
            throw new RuntimeException("Player with id " + id + " not found.");
        }
    }

    @Transactional
    public void deletePlayer(Long id) {
        playerRepository.deleteById(id);
    }
}
