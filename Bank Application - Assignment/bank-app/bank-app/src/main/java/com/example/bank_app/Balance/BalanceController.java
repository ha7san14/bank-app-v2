package com.example.bank_app.Balance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/api/v2")
public class BalanceController {

    private final BalanceService balanceService;

    @Autowired
    public BalanceController(BalanceService balanceService) {
        this.balanceService = Objects.requireNonNull(balanceService, "BalanceService must not be null");
    }

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @GetMapping("/balances")
    public ResponseEntity<List<Balance>> getAllBalances() {
        List<Balance> balances = balanceService.getAllBalances();
        if (balances.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(balances);
    }

    @GetMapping("/balances/{id}")
    public ResponseEntity<Balance> getBalanceById(@PathVariable Long id) {
        Balance balance = balanceService.getBalanceById(id);
        if (balance != null) {
            return ResponseEntity.ok(balance);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/accounts/{accountId}/balances")
    public ResponseEntity<Balance> getBalanceByAccountId(@PathVariable Long accountId) {
        Balance balance = balanceService.getBalanceByAccountId(accountId);
        if (balance != null) {
            return ResponseEntity.ok(balance);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
//    @PostMapping("/balances")
//    public ResponseEntity<Balance> createBalance(@RequestBody Balance balance) {
//        Balance createdBalance = balanceService.saveBalance(balance);
//        return ResponseEntity.status(HttpStatus.CREATED).body(createdBalance);
//    }

    @PutMapping("/balances/{id}")
    public ResponseEntity<Balance> updateBalance(@PathVariable Long id, @RequestBody Balance balance) {
        Balance existingBalance = balanceService.getBalanceById(id);
        if (existingBalance != null) {
            balance.setId(id);
            Balance updatedBalance = balanceService.saveBalance(balance);
            return ResponseEntity.ok(updatedBalance);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/balances/{id}")
    public ResponseEntity<Void> deleteBalance(@PathVariable Long id) {
        Balance existingBalance = balanceService.getBalanceById(id);
        if (existingBalance != null) {
            balanceService.deleteBalance(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
