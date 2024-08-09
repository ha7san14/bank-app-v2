package com.example.bank_app.Balance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BalanceService {

    private final BalanceRepository balanceRepository;

    @Autowired
    public BalanceService(BalanceRepository balanceRepository) {
        this.balanceRepository = balanceRepository;
    }

    public List<Balance> getAllBalances() {
        return balanceRepository.findAll();
    }

//    public List<Balance> getAllBalancesV2(int page, int size) {
//        Pageable pageable = PageRequest.of(page, size);
//        return balanceRepository.findAll(pageable).getContent();
//    }


    public Balance getBalanceById(Long id) {
        return balanceRepository.findById(id).orElse(null);
    }
    public Balance getBalanceByAccountId(Long accountId) {
        return balanceRepository.findByAccountId(accountId);
    }
    public Balance saveBalance(Balance balance) {
        return balanceRepository.save(balance);
    }

    public void deleteBalance(Long id) {
        balanceRepository.deleteById(id);
    }
}
