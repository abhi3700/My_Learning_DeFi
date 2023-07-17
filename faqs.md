# FAQs

### Q.

Consider this context for asking a question:

1. At 10 am, user-1 adds 10 tokens to a smart contract as staked to vault.
2. At 11 am, 1 token is added to a smart contract as reward by the system bot.
3. At 12 am, user-2 adds 20 tokens to a smart contract as staked to vault.
4. At 1 pm, system bot adds 3 tokens to a smart contract as reward.

Now, after 1 pm, if user-1, user-2 withdraws, then how many tokens should they be receiving?

### A.

In this scenario, the rewards are distributed proportionally to the users based on their stake in the smart contract.

At 10 am, user-1 stakes 10 tokens. At 11 am, a reward of 1 token is added. Since user-1 is the only participant at this time, they are entitled to the entire reward.

At 12 am, user-2 stakes 20 tokens. Now, the total stake is 30 tokens (10 from user-1 and 20 from user-2). At 1 pm, a reward of 3 tokens is added. These rewards are distributed proportionally to the users based on their stake.

User-1 has 1/3 of the total stake, so they receive 1/3 of the 3 tokens reward, which is 1 token. User-2 has 2/3 of the total stake, so they receive 2/3 of the 3 tokens reward, which is 2 tokens.

So, if they withdraw after 1 pm:

- User-1 should receive their initial stake (10 tokens) plus their rewards (1 token from the 11 am reward and 1 token from the 1 pm reward), for a total of 12 tokens.
- User-2 should receive their initial stake (20 tokens) plus their reward (2 tokens from the 1 pm reward), for a total of 22 tokens.
