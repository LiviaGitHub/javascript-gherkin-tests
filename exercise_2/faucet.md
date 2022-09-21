# Please identify and write down some of the Acceptance Criteria for the official Avalanche crypto faucet available publicly under address https://faucet.avax.network/.

1. As a user of the faucet with Metamask account, I want to be able to connect my Metamask account to the faucet.
    * Acceptance Criteria:
        - User should have a Metamask account.
        - A single sign-on (SSO) Metamask button must be available to connect to the Metamask account.
        - Display error message if service not responding.
        - User should be able to see a deposit address.

2. As a user of the faucet, I want to be able to receive test tokens without connecting my Metamask account to the faucet by simply entering my deposit address.
    * Acceptance Criteria:
        - A facucet address must be available, in the footer of the site, to copy and use it.  Example: [0x2352D20fC81225c8ECD8f6FaA1B37F24FEd450c9]
        - A network to select must be available.
        - A token to select must be available.
        - User still has request available within 24 hours.
        - Display error message if service not available.
        - A transaction ID link is generated.

3. As a user of the faucet, I want my deposit address to be validated for correctness.
    * Acceptance Criteria:
        - A network to select must be available.
        - A token to select must be available.
        - A facucet address must be available to use it.  Example: [0x2352D20fC81225c8ECD8f6FaA1B37F24FEd450c9]
        - User still has request available within 24 hours.
        - Display error message if service not responding.
        - A transaction ID link is generated.

4. As an owner of the faucet, I want the numbers of the drops to be limited to 1 in 24hours.
    * Acceptance Criteria:
        - User has no request available within 24 hours.
        - After too many requests, the error message should appear: 'Too many requests. Please try again after 1440 minutes'.
        - The user can no longer perform requests.
