import type { Lesson, SubjectDef } from "./types";

export const SUBJECT: SubjectDef = {
  id: "accounting",
  name: "Accounting",
  short: "ACC",
  colour: "#5a9bd4",
  tagline: "Double entry, final accounts and partnerships.",
  description: "Master double entry, final accounts, partnership and company accounts for JAMB, with fully worked ledger examples and original practice questions.",
  topics: ["Double Entry and the Trial Balance", "Final Accounts of Sole Traders", "Partnership Accounts", "Company Accounts", "Control Accounts and Bank Reconciliation", "Manufacturing Accounts", "Accounting Principles and Concepts"],
};

export const LESSONS: Lesson[] = [
  {
    id: "accounting-01",
    subjectId: "accounting",
    topic: "Double Entry and the Trial Balance",
    subtopic: "The double entry system and the accounting equation",
    title: "Double Entry and the Accounting Equation",
    order: 1,
    introduction: "Every business transaction affects at least two accounts. This lesson explains the double entry system, the rules of debit and credit, and the accounting equation that keeps every balance sheet in balance.",
    objectives: ["Explain the double entry principle and why every transaction has two effects", "State and apply the accounting equation Assets = Capital + Liabilities", "Apply the debit and credit rules to assets, liabilities, capital, income and expenses", "Classify accounts into personal, real and nominal accounts", "Record simple transactions in ledger accounts"],
    sections: [
      {
        heading: "What Double Entry Means",
        body: "Double entry is the system of recording every transaction twice: once as a debit in one account and once as a credit in another account of equal value. If a business buys goods for cash, the purchases account is debited because goods have come in, and the cash account is credited because cash has gone out. If the owner puts more money into the business, cash is debited and capital is credited. The system was developed so that the books always balance and errors are easier to find. Every debit must have an equal credit, so total debits always equal total credits. This is the foundation of all the final accounts you will prepare later in this subject."
      },
      {
        heading: "The Accounting Equation",
        body: "The accounting equation states that Assets = Capital + Liabilities. Assets are the things a business owns, such as cash, stock, motor vehicles and amounts owed by customers. Liabilities are amounts the business owes to outsiders, such as loans and amounts owed to suppliers. Capital is the owner's claim on the business, which is the money the owner put in plus profits kept in the business minus drawings. The equation must always balance: if assets increase, either capital or liabilities must increase by the same amount, or another asset must decrease. For example, if a business buys a motor van for 500,000 naira cash, cash falls by 500,000 naira and the motor van, an asset, rises by 500,000 naira, so total assets are unchanged and the equation still balances."
      },
      {
        heading: "Rules of Debit and Credit",
        body: "The rules are simple once you learn them by account type. Debit an asset when it increases and credit it when it decreases. Credit a liability when it increases and debit it when it decreases. Credit capital when it increases, for example when the owner adds money or the business makes a profit, and debit capital when it decreases, for example when the owner takes drawings. Debit expenses and losses when they increase, and credit income and gains when they increase. A useful memory aid is DEAD CLIC: Debit Expenses, Assets and Drawings; Credit Liabilities, Income and Capital. Remember that debit does not mean good and credit does not mean bad: they are simply the left and right sides of an account."
      },
      {
        heading: "Types of Accounts",
        body: "Accounts are grouped into three classes. Personal accounts record dealings with people and businesses, such as customers, called debtors, and suppliers, called creditors. Real accounts record assets, such as cash, bank, premises, motor vehicles, fixtures and stock. Nominal accounts record income, expenses, gains and losses, such as sales, purchases, rent, salaries and wages. Personal and real accounts are carried forward from one period to the next, while nominal accounts are closed off to the trading, profit and loss account at the end of the period. Knowing the class of an account helps you decide its normal balance: assets and expenses normally have debit balances, while liabilities, capital and income normally have credit balances."
      }
    ],
    definitions: [
      { term: "Double entry", meaning: "A system of recording every transaction as a debit in one account and an equal credit in another account." },
      { term: "Debit", meaning: "The left-hand side of a ledger account; an entry that increases an asset or expense, or decreases a liability, capital or income." },
      { term: "Credit", meaning: "The right-hand side of a ledger account; an entry that increases a liability, capital or income, or decreases an asset or expense." },
      { term: "Asset", meaning: "A resource owned or controlled by a business, such as cash, stock, premises or a motor vehicle." },
      { term: "Liability", meaning: "An amount owed by a business to an outsider, such as a loan or an amount owed to a supplier." },
      { term: "Capital", meaning: "The owner's investment in the business, plus profits retained, minus drawings." }
    ],
    formulas: ["Accounting equation: Assets = Capital + Liabilities.", "Capital = Assets - Liabilities.", "Assets = Liabilities + Capital + Profit - Drawings.", "Total debits = Total credits in a double entry system."],
    examples: [
      {
        title: "Applying the accounting equation",
        problem: "A business has assets of 2,400,000 naira and liabilities of 900,000 naira. What is the owner's capital?",
        steps: ["Write the equation: Capital = Assets - Liabilities.", "Insert the figures: Capital = 2,400,000 - 900,000.", "Subtract: 2,400,000 - 900,000 = 1,500,000.", "Check that Assets = Capital + Liabilities: 1,500,000 + 900,000 = 2,400,000.", "State the answer with the currency."],
        answer: "Capital is 1,500,000 naira."
      },
      {
        title: "Recording a credit purchase",
        problem: "A business buys goods worth 120,000 naira on credit from Musa Suppliers. Show the double entry.",
        steps: ["Identify the two accounts: Purchases and Musa Suppliers, a creditor.", "Purchases is an expense, so an increase is debited: debit Purchases 120,000 naira.", "Musa Suppliers is a liability, so an increase is credited: credit Musa Suppliers 120,000 naira.", "Check that debit equals credit: 120,000 naira on each side.", "Note that no cash has moved, so the cash account is not touched."],
        answer: "Debit Purchases 120,000 naira; credit Musa Suppliers 120,000 naira."
      },
      {
        title: "Owner introduces additional capital",
        problem: "The owner of a business introduces an additional 300,000 naira cash into the business. Show the double entry.",
        steps: ["Identify the accounts: Cash and Capital.", "Cash is an asset that has increased, so debit Cash 300,000 naira.", "Capital has increased, so credit Capital 300,000 naira.", "Check the equation: assets rise by 300,000 naira and capital rises by 300,000 naira.", "Both sides of the equation remain equal."],
        answer: "Debit Cash 300,000 naira; credit Capital 300,000 naira."
      }
    ],
    tips: ["Use DEAD CLIC to remember debit and credit rules: Debit Expenses, Assets, Drawings; Credit Liabilities, Income, Capital.", "Always identify the two accounts in a transaction before deciding debit or credit.", "Check every entry with the accounting equation; if it does not balance, an entry is wrong.", "Remember that a debit balance normally means an asset or expense, and a credit balance normally means a liability, capital or income."],
    mistakes: ["Debiting cash when cash is paid out; paying cash out is a credit to cash.", "Crediting purchases; purchases are an expense, so they are debited.", "Treating drawings as an expense; drawings reduce capital, they are not a business expense.", "Forgetting the second half of the double entry and recording only one side."],
    facts: ["In double entry, total debits always equal total credits.", "The accounting equation is Assets = Capital + Liabilities.", "Customers who owe the business are debtors; suppliers the business owes are creditors.", "Nominal accounts are closed off at the end of the period, while personal and real accounts are carried forward."],
    quiz: [
      { q: "What does the double entry system require for every transaction?", options: ["One debit only", "One credit only", "An equal debit and credit", "Two debits and no credit"], answer: 2, explanation: "Every transaction is recorded as a debit in one account and an equal credit in another account." },
      { q: "What is the accounting equation?", options: ["Assets = Capital - Liabilities", "Assets = Capital + Liabilities", "Capital = Assets + Liabilities", "Liabilities = Assets + Capital"], answer: 1, explanation: "The accounting equation is Assets = Capital + Liabilities." },
      { q: "A business has assets of 2,400,000 naira and liabilities of 900,000 naira. What is its capital?", options: ["3,300,000 naira", "1,500,000 naira", "900,000 naira", "2,400,000 naira"], answer: 1, explanation: "Capital = Assets - Liabilities = 2,400,000 - 900,000 = 1,500,000 naira." },
      { q: "When a business buys goods on credit, which account is credited?", options: ["Purchases account", "Cash account", "The supplier's account", "Sales account"], answer: 2, explanation: "The supplier is a creditor, a liability that has increased, so the supplier's account is credited." },
      { q: "Which of these is an asset?", options: ["Loan from a bank", "Amount owed to a supplier", "Motor vehicle", "Owner's capital"], answer: 2, explanation: "A motor vehicle is owned by the business, so it is an asset; the others are liabilities or capital." },
      { q: "An increase in an expense is recorded as what?", options: ["A debit", "A credit", "No entry", "A balance carried down"], answer: 0, explanation: "Expenses are debited when they increase." },
      { q: "The owner takes goods worth 20,000 naira from the business for personal use. What is this called?", options: ["Purchases", "Sales", "Drawings", "Bad debt"], answer: 2, explanation: "Goods or cash taken by the owner for personal use are drawings, which reduce capital." },
      { q: "Which accounts are normally closed off at the end of the period?", options: ["Personal accounts", "Real accounts", "Nominal accounts", "Bank accounts"], answer: 2, explanation: "Nominal accounts, which record income and expenses, are closed off to the trading and profit and loss account." },
      { q: "A debtor is a person who does what?", options: ["Is owed money by the business", "Owes money to the business", "Supplies goods on credit", "Lends money to the business"], answer: 1, explanation: "A debtor is a customer who bought goods on credit and owes the business money." },
      { q: "If the owner introduces 300,000 naira cash into the business, how is capital affected?", options: ["Capital is debited 300,000 naira", "Capital is credited 300,000 naira", "Capital is unchanged", "Capital is reduced by 300,000 naira"], answer: 1, explanation: "Capital increases when the owner adds money, and an increase in capital is a credit." },
      { q: "Which of these normally has a debit balance?", options: ["Sales", "Capital", "Purchases", "Creditors"], answer: 2, explanation: "Purchases is an expense account and normally has a debit balance." },
      { q: "A business buys a motor van for 500,000 naira cash. What happens to total assets?", options: ["They increase by 500,000 naira", "They decrease by 500,000 naira", "They stay the same", "They increase by 1,000,000 naira"], answer: 2, explanation: "Cash falls by 500,000 naira and the motor van rises by 500,000 naira, so total assets are unchanged." },
      { q: "In DEAD CLIC, which letters stand for accounts that are debited when they increase?", options: ["Liabilities, Income, Capital", "Expenses, Assets, Drawings", "Capital, Income, Creditors", "Assets, Liabilities, Sales"], answer: 1, explanation: "DEAD stands for Debit Expenses, Assets and Drawings when they increase." },
      { q: "Which of these is a liability?", options: ["Stock", "Cash at bank", "Amount owed to a supplier", "Fixtures"], answer: 2, explanation: "An amount owed to a supplier is a creditor, which is a liability." },
      { q: "A business pays rent of 60,000 naira in cash. What is the double entry?", options: ["Debit Cash, credit Rent", "Debit Rent, credit Cash", "Debit Rent, credit Capital", "Debit Capital, credit Cash"], answer: 1, explanation: "Rent is an expense, so it is debited, and cash has gone out, so cash is credited." }
    ],
    status: "published"
  },
  {
    id: "accounting-02",
    subjectId: "accounting",
    topic: "Double Entry and the Trial Balance",
    subtopic: "The trial balance and correction of errors",
    title: "The Trial Balance and Correction of Errors",
    order: 2,
    introduction: "The trial balance is the first check that the double entry books are correct. This lesson explains how to extract it, what it can and cannot prove, and how to correct the errors it does and does not reveal.",
    objectives: ["Explain the purpose of the trial balance", "Extract a trial balance from ledger balances", "Identify errors that the trial balance does and does not disclose", "Correct errors using the journal and the suspense account", "Prepare a corrected trial balance after adjustments"],
    sections: [
      {
        heading: "Purpose of the Trial Balance",
        body: "A trial balance is a list of all the debit and credit balances in the ledger at a particular date, used to check that total debits equal total credits. It is prepared after the ledger accounts have been balanced off, usually at the end of an accounting period and before the final accounts are drawn up. If the two columns agree, it shows that the double entry has been carried out arithmetically correctly, at least in total. If they do not agree, an error has been made somewhere and must be found before the final accounts are prepared. The trial balance is not itself an account and it is not part of the double entry system; it is a working check. It also provides the figures from which the trading, profit and loss account and the balance sheet are prepared."
      },
      {
        heading: "Extracting the Trial Balance",
        body: "To extract a trial balance, list every ledger account balance: accounts with debit balances go in the debit column and accounts with credit balances go in the credit column. Assets, expenses, purchases, drawings and debtors normally have debit balances, while liabilities, capital, sales, income and creditors normally have credit balances. Add both columns and compare the totals. For example, if capital is 1,000,000 naira credit, cash is 400,000 naira debit, stock is 300,000 naira debit, sales are 800,000 naira credit, purchases are 700,000 naira debit and creditors are 400,000 naira credit, then debits are 400,000 + 300,000 + 700,000 = 1,400,000 naira and credits are 1,000,000 + 800,000 + 400,000 = 2,200,000 naira, so the trial balance does not agree and an error must exist. In a correct set of books the two totals are equal. A common shortcut in the examination is to check that the difference is divisible by 2, which often points to a one-sided entry, or by 9, which often points to a transposition error."
      },
      {
        heading: "Errors the Trial Balance Does Not Disclose",
        body: "A trial balance that agrees does not prove the books are error-free, because six types of error do not affect the agreement of the totals. An error of omission is when a transaction is completely left out. An error of commission is when an entry is made in the wrong personal account, for example debiting the wrong customer. An error of principle is when an entry is made in the wrong class of account, for example debiting purchases instead of a motor vehicle. An error of original entry is when the wrong amount is entered in both accounts. A compensating error is when two errors cancel each other out. An error of complete reversal is when the debit and credit are swapped. All of these leave total debits equal to total credits, so the trial balance still agrees. JAMB often tests this list, so learn all six by name."
      },
      {
        heading: "Errors the Trial Balance Does Disclose and Their Correction",
        body: "Errors that make the trial balance disagree include a one-sided entry, entering an amount on the wrong side of an account, adding up a column incorrectly, carrying a balance to the wrong side of the trial balance, or entering different amounts on the debit and credit sides. When the trial balance does not agree, the difference is opened in a suspense account so that the final accounts can be prepared while the error is traced. Once the error is found, a journal entry corrects it and clears the suspense account. For example, if rent of 50,000 naira was debited to the rent account as 5,000 naira, the correcting entry is to debit rent with 45,000 naira and credit the suspense account with 45,000 naira. Errors that do not affect the trial balance are corrected by a journal entry alone, without a suspense account, because the books already agree."
      }
    ],
    definitions: [
      { term: "Trial balance", meaning: "A list of all debit and credit balances in the ledger at a date, used to check that total debits equal total credits." },
      { term: "Suspense account", meaning: "A temporary account opened for the difference in a trial balance that does not agree, until the error is found." },
      { term: "Error of omission", meaning: "An error where a transaction is completely left out of the books." },
      { term: "Error of commission", meaning: "An error where an entry is made in the wrong personal account of the correct class." },
      { term: "Error of principle", meaning: "An error where an entry is made in the wrong class of account." },
      { term: "Compensating error", meaning: "Two errors that cancel each other out, leaving the trial balance in agreement." }
    ],
    formulas: ["Trial balance: total debit balances = total credit balances.", "Difference divisible by 2 often points to a one-sided or wrong-side entry.", "Difference divisible by 9 often points to a transposition error.", "Corrected balance = original balance plus or minus the correcting amount."],
    examples: [
      {
        title: "Extracting a simple trial balance",
        problem: "At 31 December, a business has: Capital 800,000 naira credit, Cash 250,000 naira debit, Stock 350,000 naira debit, Sales 600,000 naira credit, Purchases 500,000 naira debit, Creditors 300,000 naira credit. Does the trial balance agree?",
        steps: ["Add the debit balances: 250,000 + 350,000 + 500,000 = 1,100,000 naira.", "Add the credit balances: 800,000 + 600,000 + 300,000 = 1,700,000 naira.", "Compare the totals: debits 1,100,000 naira, credits 1,700,000 naira.", "The difference is 600,000 naira, so the trial balance does not agree.", "An error of 600,000 naira must be traced before final accounts are prepared."],
        answer: "No, it does not agree: debits total 1,100,000 naira and credits total 1,700,000 naira, a difference of 600,000 naira."
      },
      {
        title: "Correcting an error of principle",
        problem: "A motor vehicle bought for 900,000 naira cash was debited to the purchases account in error. Correct the error.",
        steps: ["Identify the error: a motor vehicle is a fixed asset, not purchases, so this is an error of principle.", "The purchases account was wrongly debited, so credit Purchases with 900,000 naira to cancel it.", "The motor vehicles account should have been debited, so debit Motor Vehicles with 900,000 naira.", "No suspense account is needed because the trial balance already agreed.", "Record the correction by journal: debit Motor Vehicles, credit Purchases."],
        answer: "Debit Motor Vehicles 900,000 naira; credit Purchases 900,000 naira."
      },
      {
        title: "Using a suspense account",
        problem: "A trial balance shows debits of 1,250,000 naira and credits of 1,200,000 naira. The error is later found: sales of 50,000 naira were entered only in the sales account. Show the correction.",
        steps: ["The difference is 50,000 naira, with debits greater than credits, so open a suspense account with a credit balance of 50,000 naira.", "The error is that sales were credited but the debtor was never debited.", "The correcting entry debits the debtor, or debtors account, with 50,000 naira.", "Credit the suspense account with 50,000 naira to close it.", "After correction the trial balance agrees and the suspense account is nil."],
        answer: "Debit Debtors 50,000 naira; credit Suspense account 50,000 naira."
      }
    ],
    tips: ["Learn the six errors the trial balance does not disclose: omission, commission, principle, original entry, compensating and complete reversal.", "If the trial balance difference is divisible by 2, look for a one-sided entry or an amount on the wrong side.", "If the difference is divisible by 9, look for a transposed figure such as 54 written as 45.", "A suspense account is used only when the trial balance disagrees."],
    mistakes: ["Saying an agreed trial balance proves there are no errors; six errors can still hide in it.", "Using a suspense account for an error that does not affect the trial balance.", "Putting a debit balance in the credit column of the trial balance.", "Forgetting that the trial balance is a list, not a ledger account."],
    facts: ["The trial balance checks that total debits equal total credits.", "An error of principle puts an entry in the wrong class of account.", "A transposition error, such as 540 written as 450, gives a difference divisible by 9.", "The suspense account is temporary and must be closed once the error is found."],
    quiz: [
      { q: "What is the main purpose of a trial balance?", options: ["To calculate profit", "To check that total debits equal total credits", "To record daily transactions", "To value closing stock"], answer: 1, explanation: "The trial balance lists ledger balances to check that total debits equal total credits." },
      { q: "Which of these normally has a credit balance?", options: ["Purchases", "Drawings", "Sales", "Cash"], answer: 2, explanation: "Sales is income and normally has a credit balance." },
      { q: "Which error is NOT disclosed by the trial balance?", options: ["A one-sided entry", "An error of omission", "Adding a column wrongly", "Entering a balance on the wrong side"], answer: 1, explanation: "An error of omission leaves a transaction out entirely, so debits still equal credits." },
      { q: "A motor vehicle bought for cash is debited to purchases. What type of error is this?", options: ["Error of omission", "Error of commission", "Error of principle", "Compensating error"], answer: 2, explanation: "It is an error of principle because an asset was recorded in the wrong class of account, as an expense." },
      { q: "When is a suspense account opened?", options: ["When the trial balance agrees", "When the trial balance does not agree", "At the start of every year", "When profit is calculated"], answer: 1, explanation: "A suspense account holds the difference when the trial balance does not agree, until the error is found." },
      { q: "A trial balance difference of 9,000 naira most likely points to what?", options: ["An error of omission", "A transposition error", "An error of principle", "A compensating error"], answer: 1, explanation: "A difference divisible by 9 often comes from transposed figures, such as 90 written as 09." },
      { q: "Rent of 50,000 naira was entered as 5,000 naira in the rent account only. What is the correcting amount?", options: ["5,000 naira", "45,000 naira", "50,000 naira", "55,000 naira"], answer: 1, explanation: "Rent is understated by 50,000 - 5,000 = 45,000 naira, so a further 45,000 naira must be debited." },
      { q: "Which of these is an error of commission?", options: ["Leaving a transaction out completely", "Debiting the wrong customer", "Debiting a motor vehicle to purchases", "Swapping debit and credit"], answer: 1, explanation: "An error of commission puts an entry in the wrong personal account of the correct class." },
      { q: "Two errors that cancel each other out are called what?", options: ["Compensating errors", "Errors of omission", "Errors of principle", "Errors of original entry"], answer: 0, explanation: "Compensating errors cancel each other, so the trial balance still agrees." },
      { q: "Which account normally has a debit balance?", options: ["Capital", "Creditors", "Debtors", "Sales"], answer: 2, explanation: "Debtors are assets, amounts owed to the business, and normally have debit balances." },
      { q: "An error of complete reversal is when what happens?", options: ["A transaction is left out", "The debit and credit are swapped", "The wrong amount is entered on both sides", "Two errors cancel out"], answer: 1, explanation: "In a complete reversal the account that should be debited is credited and the one that should be credited is debited." },
      { q: "What is the trial balance prepared from?", options: ["Source documents", "Ledger balances", "Bank statements", "Invoices only"], answer: 1, explanation: "The trial balance is extracted from the balances in the ledger accounts." },
      { q: "If sales of 50,000 naira were credited to sales but the debtor was never debited, what is needed?", options: ["A journal entry debiting debtors and crediting suspense", "No correction, the books agree", "A journal entry debiting sales", "A new trial balance only"], answer: 0, explanation: "The debtor must be debited and the suspense account credited to close the difference." },
      { q: "Which of these errors affects the trial balance?", options: ["Error of omission", "Error of principle", "Carrying a balance to the wrong side", "Error of commission"], answer: 2, explanation: "Carrying a balance to the wrong side makes one column wrong, so the trial balance disagrees." },
      { q: "The trial balance is best described as what?", options: ["A ledger account", "A list of ledger balances", "A final account", "A source document"], answer: 1, explanation: "The trial balance is a list of balances, not an account in the double entry system." }
    ],
    status: "published"
  },
  {
    id: "accounting-03",
    subjectId: "accounting",
    topic: "Final Accounts of Sole Traders",
    subtopic: "The trading account and gross profit",
    title: "The Trading Account and Gross Profit",
    order: 3,
    introduction: "The trading account shows whether a business made a gross profit or a gross loss from buying and selling goods. This lesson explains sales, cost of sales, returns, carriage and stock, and how to calculate gross profit correctly.",
    objectives: ["Explain the purpose of the trading account", "Calculate net sales and net purchases", "Calculate cost of goods sold using opening and closing stock", "Calculate gross profit and gross loss", "Treat returns, carriage inwards and carriage outwards correctly"],
    sections: [
      {
        heading: "Purpose of the Trading Account",
        body: "The trading account is the first section of the final accounts of a trading business. It compares the sales revenue earned in a period with the cost of the goods sold in that period, and the difference is the gross profit or the gross loss. Gross profit is the profit before deducting the running expenses of the business, such as rent, salaries and electricity. A trading business buys goods and sells them at a higher price, so gross profit is the mark-up on the goods actually sold. The trading account is prepared for an accounting period, usually one year, and it uses the matching idea: only the cost of the goods sold in that period is matched against the sales of that period. Goods still in stock at the end of the period have not been sold, so their cost is carried forward, not charged to this period."
      },
      {
        heading: "Net Sales and Net Purchases",
        body: "Sales in the trading account are net sales: total sales less returns inwards, which are goods returned by customers. If total sales are 2,000,000 naira and returns inwards are 80,000 naira, net sales are 1,920,000 naira. Purchases are also shown net: total purchases less returns outwards, which are goods returned to suppliers. If total purchases are 1,400,000 naira and returns outwards are 60,000 naira, net purchases are 1,340,000 naira. Returns inwards reduce sales because the sale is cancelled, and returns outwards reduce purchases because the goods go back to the supplier. Carriage inwards, the cost of bringing goods into the business, is added to the cost of goods, because it is part of the cost of getting the goods ready for sale. Carriage outwards, the cost of delivering goods to customers, is a selling expense and goes in the profit and loss account, not the trading account."
      },
      {
        heading: "Cost of Goods Sold",
        body: "Cost of goods sold is the cost of the goods that were actually sold during the period. It is calculated as opening stock plus net purchases plus carriage inwards, less closing stock. Opening stock is the stock at the start of the period, which was bought in an earlier period but is available for sale now. Closing stock is the stock still unsold at the end of the period, valued at the lower of cost and net realisable value, and it is deducted because it has not been sold. For example, opening stock 200,000 naira plus net purchases 1,340,000 naira plus carriage inwards 40,000 naira gives goods available for sale of 1,580,000 naira; less closing stock 280,000 naira gives cost of goods sold of 1,300,000 naira. If net sales are 1,920,000 naira, gross profit is 1,920,000 minus 1,300,000, which is 620,000 naira. A gross loss arises when cost of goods sold is greater than net sales."
      },
      {
        heading: "Format of the Trading Account",
        body: "The trading account is presented in a vertical or T-format. On the debit side are opening stock, purchases less returns outwards, and carriage inwards, with closing stock deducted to give cost of goods sold. On the credit side are sales less returns inwards. The balance is the gross profit, carried down, or the gross loss if cost exceeds sales. In the vertical format the layout is: Sales less returns inwards gives net sales; less cost of goods sold gives gross profit. Closing stock appears twice in the final accounts: it is deducted in the trading account to arrive at cost of goods sold, and it appears as a current asset in the balance sheet. Drawings of goods by the owner are deducted from purchases, because goods taken for personal use are not available for sale, and goods taken for personal use are not a business expense."
      }
    ],
    definitions: [
      { term: "Gross profit", meaning: "Net sales less cost of goods sold; the profit from trading before deducting running expenses." },
      { term: "Cost of goods sold", meaning: "Opening stock plus net purchases plus carriage inwards, less closing stock." },
      { term: "Returns inwards", meaning: "Goods returned to the business by customers; deducted from sales." },
      { term: "Returns outwards", meaning: "Goods returned by the business to suppliers; deducted from purchases." },
      { term: "Carriage inwards", meaning: "The cost of transporting goods into the business; added to the cost of goods sold." },
      { term: "Closing stock", meaning: "Goods still unsold at the end of the period, valued at the lower of cost and net realisable value." }
    ],
    formulas: ["Net sales = Sales - Returns inwards.", "Net purchases = Purchases - Returns outwards.", "Cost of goods sold = Opening stock + Net purchases + Carriage inwards - Closing stock.", "Gross profit = Net sales - Cost of goods sold.", "Gross profit percentage = (Gross profit / Net sales) x 100."],
    examples: [
      {
        title: "Calculating gross profit",
        problem: "Opening stock 200,000 naira, purchases 1,400,000 naira, returns outwards 60,000 naira, carriage inwards 40,000 naira, closing stock 280,000 naira, sales 2,000,000 naira, returns inwards 80,000 naira. Calculate gross profit.",
        steps: ["Net sales = 2,000,000 - 80,000 = 1,920,000 naira.", "Net purchases = 1,400,000 - 60,000 = 1,340,000 naira.", "Goods available = 200,000 + 1,340,000 + 40,000 = 1,580,000 naira.", "Cost of goods sold = 1,580,000 - 280,000 = 1,300,000 naira.", "Gross profit = 1,920,000 - 1,300,000 = 620,000 naira."],
        answer: "Gross profit is 620,000 naira."
      },
      {
        title: "Finding closing stock from gross profit",
        problem: "Net sales are 900,000 naira, gross profit is 300,000 naira, opening stock is 100,000 naira and net purchases are 550,000 naira. There is no carriage inwards. What is closing stock?",
        steps: ["Cost of goods sold = Net sales - Gross profit = 900,000 - 300,000 = 600,000 naira.", "Cost of goods sold = Opening stock + Net purchases - Closing stock.", "So 600,000 = 100,000 + 550,000 - Closing stock.", "600,000 = 650,000 - Closing stock, so closing stock = 650,000 - 600,000.", "Closing stock = 50,000 naira."],
        answer: "Closing stock is 50,000 naira."
      },
      {
        title: "Gross loss",
        problem: "Net sales are 400,000 naira and cost of goods sold is 460,000 naira. What is the result?",
        steps: ["Gross profit = Net sales - Cost of goods sold.", "Insert the figures: 400,000 - 460,000 = -60,000 naira.", "A negative result means the cost of sales exceeded sales.", "This is a gross loss, not a gross profit.", "The gross loss of 60,000 naira is carried to the profit and loss account."],
        answer: "A gross loss of 60,000 naira."
      }
    ],
    tips: ["Always deduct returns inwards from sales and returns outwards from purchases before calculating profit.", "Carriage inwards goes in the trading account; carriage outwards goes in the profit and loss account.", "Closing stock is deducted in the trading account and shown as a current asset in the balance sheet.", "Gross profit percentage is calculated on net sales, not on cost of goods sold."],
    mistakes: ["Adding closing stock instead of deducting it in cost of goods sold.", "Putting carriage outwards in the trading account.", "Using total sales instead of net sales.", "Forgetting to deduct goods taken by the owner as drawings from purchases."],
    facts: ["Gross profit = Net sales - Cost of goods sold.", "Closing stock is valued at the lower of cost and net realisable value.", "Returns inwards reduce sales; returns outwards reduce purchases.", "A gross loss arises when cost of goods sold exceeds net sales."],
    quiz: [
      { q: "What does the trading account calculate?", options: ["Net profit", "Gross profit or gross loss", "Capital", "Bank balance"], answer: 1, explanation: "The trading account compares net sales with cost of goods sold to give gross profit or gross loss." },
      { q: "Net sales are calculated as what?", options: ["Sales + Returns inwards", "Sales - Returns inwards", "Sales - Returns outwards", "Sales + Purchases"], answer: 1, explanation: "Net sales = total sales less returns inwards, goods returned by customers." },
      { q: "Opening stock 200,000 naira, net purchases 1,340,000 naira, carriage inwards 40,000 naira, closing stock 280,000 naira. What is cost of goods sold?", options: ["1,300,000 naira", "1,580,000 naira", "1,860,000 naira", "1,020,000 naira"], answer: 0, explanation: "Cost of goods sold = 200,000 + 1,340,000 + 40,000 - 280,000 = 1,300,000 naira." },
      { q: "If net sales are 1,920,000 naira and cost of goods sold is 1,300,000 naira, gross profit is what?", options: ["620,000 naira", "3,220,000 naira", "1,300,000 naira", "580,000 naira"], answer: 0, explanation: "Gross profit = 1,920,000 - 1,300,000 = 620,000 naira." },
      { q: "Carriage outwards is treated as what?", options: ["Part of cost of goods sold", "A selling expense in the profit and loss account", "A deduction from sales", "A current asset"], answer: 1, explanation: "Carriage outwards is the cost of delivering goods to customers, a selling expense in the profit and loss account." },
      { q: "Returns outwards are deducted from what?", options: ["Sales", "Purchases", "Closing stock", "Gross profit"], answer: 1, explanation: "Returns outwards are goods returned to suppliers, so they are deducted from purchases." },
      { q: "Closing stock appears in which two places in the final accounts?", options: ["Trading account and profit and loss account", "Trading account and balance sheet", "Profit and loss account and balance sheet", "Trial balance only"], answer: 1, explanation: "Closing stock is deducted in the trading account and shown as a current asset in the balance sheet." },
      { q: "Goods taken by the owner for personal use are deducted from what?", options: ["Sales", "Purchases", "Closing stock", "Capital only"], answer: 1, explanation: "Goods drawn by the owner are deducted from purchases, because they are not available for sale." },
      { q: "If cost of goods sold is greater than net sales, the result is what?", options: ["Gross profit", "Net profit", "Gross loss", "Net loss only"], answer: 2, explanation: "When cost of goods sold exceeds net sales, the trading account shows a gross loss." },
      { q: "Carriage inwards is added to what?", options: ["Net sales", "Cost of goods sold", "Closing stock", "Gross profit"], answer: 1, explanation: "Carriage inwards is part of the cost of getting goods ready for sale, so it is added in cost of goods sold." },
      { q: "A business has net sales of 500,000 naira and gross profit of 150,000 naira. What is cost of goods sold?", options: ["650,000 naira", "350,000 naira", "150,000 naira", "500,000 naira"], answer: 1, explanation: "Cost of goods sold = Net sales - Gross profit = 500,000 - 150,000 = 350,000 naira." },
      { q: "Closing stock is valued at what?", options: ["Cost only", "Net realisable value only", "The lower of cost and net realisable value", "The higher of cost and net realisable value"], answer: 2, explanation: "Closing stock is valued at the lower of cost and net realisable value, following prudence." },
      { q: "Which of these is a deduction from sales in the trading account?", options: ["Returns outwards", "Carriage inwards", "Returns inwards", "Opening stock"], answer: 2, explanation: "Returns inwards are goods returned by customers and are deducted from sales." },
      { q: "Gross profit of 620,000 naira on net sales of 1,920,000 naira is closest to what percentage?", options: ["About 48 percent", "About 32 percent", "About 24 percent", "About 68 percent"], answer: 1, explanation: "620,000 divided by 1,920,000, times 100, is about 32 percent." },
      { q: "Opening stock is best described as what?", options: ["Stock bought this period", "Stock unsold at the end of last period", "Stock returned to suppliers", "Stock sold this period"], answer: 1, explanation: "Opening stock is the stock left unsold at the end of the previous period, available for sale now." }
    ],
    status: "published"
  },
  {
    id: "accounting-04",
    subjectId: "accounting",
    topic: "Final Accounts of Sole Traders",
    subtopic: "Profit and loss account and balance sheet",
    title: "Profit and Loss Account and Balance Sheet",
    order: 4,
    introduction: "After gross profit, the profit and loss account deducts running expenses and adds other income to find net profit. The balance sheet then shows what the business owns, owes and is worth at the year end.",
    objectives: ["Prepare a profit and loss account from gross profit", "Distinguish revenue expenditure from capital expenditure", "Calculate net profit and net loss", "Prepare a balance sheet with fixed and current assets", "Explain accruals, prepayments, depreciation and provisions for bad debts"],
    sections: [
      {
        heading: "From Gross Profit to Net Profit",
        body: "The profit and loss account starts with the gross profit brought down from the trading account. Other income is added, such as rent received, commission received, discount received and interest received. Then the expenses of running the business are deducted: salaries and wages, rent and rates, electricity, insurance, advertising, carriage outwards, depreciation, bad debts and interest paid. The balance is the net profit, or the net loss if expenses and other charges exceed gross profit plus other income. For example, gross profit 620,000 naira plus discount received 10,000 naira less salaries 200,000 naira, rent 120,000 naira and depreciation 50,000 naira gives net profit of 260,000 naira. Net profit belongs to the owner, so it is added to capital in the balance sheet."
      },
      {
        heading: "Revenue and Capital Expenditure",
        body: "Revenue expenditure is spending on the day-to-day running of the business, such as rent, salaries and repairs, and it is charged to the profit and loss account in the period it is incurred. Capital expenditure is spending on fixed assets, such as buying premises, a motor vehicle or machinery, and it is shown in the balance sheet as an asset, not charged as an expense at once. The cost of a fixed asset is spread over its useful life through depreciation, which is charged to the profit and loss account each year. A common examination trap is to treat the purchase of a motor vehicle as an expense; it is capital expenditure. Equally, repairs that simply keep an asset working are revenue expenditure, while an improvement that extends its life is capital expenditure."
      },
      {
        heading: "Accruals, Prepayments and Depreciation",
        body: "Accruals and prepayments apply the matching concept: expenses are recorded in the period they relate to, not when cash is paid. An accrued expense is one incurred but not yet paid at the year end, such as rent owing, and it is added to the expense in the profit and loss account and shown as a current liability. A prepaid expense is one paid in advance, such as insurance paid for next year, and it is deducted from the expense and shown as a current asset. Depreciation is the fall in value of a fixed asset through use, wear and tear or time passing. Under the straight line method, depreciation each year equals cost less residual value, divided by useful life. Under the reducing balance method, a fixed percentage is charged on the written down value each year. Accumulated depreciation is deducted from the cost of the asset in the balance sheet to give its net book value."
      },
      {
        heading: "The Balance Sheet",
        body: "The balance sheet is a statement of the financial position of a business at a particular date. It lists fixed assets, such as premises, motor vehicles and fixtures, at cost less accumulated depreciation; current assets, such as stock, debtors, prepayments and cash; and current liabilities, such as creditors, accruals and bank overdraft. Net current assets, also called working capital, equal current assets less current liabilities. Long-term liabilities, such as a bank loan, are shown separately. Capital is shown as opening capital plus net profit, less drawings. The balance sheet must balance: total assets less total liabilities equals capital, which is the accounting equation in statement form. A balance sheet is a snapshot at one date, while the trading and profit and loss account covers a whole period."
      }
    ],
    definitions: [
      { term: "Net profit", meaning: "Gross profit plus other income, less all running expenses of the period." },
      { term: "Revenue expenditure", meaning: "Spending on the day-to-day running of the business, charged to the profit and loss account." },
      { term: "Capital expenditure", meaning: "Spending on fixed assets, shown in the balance sheet and spread by depreciation." },
      { term: "Depreciation", meaning: "The fall in value of a fixed asset through use, wear and tear, or the passage of time." },
      { term: "Accrual", meaning: "An expense incurred but not yet paid at the year end; a current liability." },
      { term: "Net book value", meaning: "The cost of a fixed asset less its accumulated depreciation." }
    ],
    formulas: ["Net profit = Gross profit + Other income - Expenses.", "Working capital = Current assets - Current liabilities.", "Straight line depreciation = (Cost - Residual value) / Useful life.", "Net book value = Cost - Accumulated depreciation.", "Closing capital = Opening capital + Net profit - Drawings."],
    examples: [
      {
        title: "Calculating net profit",
        problem: "Gross profit 620,000 naira, discount received 10,000 naira, salaries 200,000 naira, rent 120,000 naira, depreciation 50,000 naira. Calculate net profit.",
        steps: ["Add other income to gross profit: 620,000 + 10,000 = 630,000 naira.", "Add the expenses: 200,000 + 120,000 + 50,000 = 370,000 naira.", "Net profit = 630,000 - 370,000.", "630,000 - 370,000 = 260,000 naira.", "The net profit of 260,000 naira is added to capital."],
        answer: "Net profit is 260,000 naira."
      },
      {
        title: "Straight line depreciation",
        problem: "A machine costs 800,000 naira, has a residual value of 100,000 naira and a useful life of 7 years. Calculate annual depreciation and net book value after 2 years.",
        steps: ["Annual depreciation = (800,000 - 100,000) / 7 = 700,000 / 7.", "700,000 / 7 = 100,000 naira per year.", "Accumulated depreciation after 2 years = 2 x 100,000 = 200,000 naira.", "Net book value = 800,000 - 200,000 = 600,000 naira.", "Check: each year the value falls by the same 100,000 naira."],
        answer: "Annual depreciation is 100,000 naira; net book value after 2 years is 600,000 naira."
      },
      {
        title: "Closing capital and the balance sheet",
        problem: "Opening capital 1,000,000 naira, net profit 260,000 naira, drawings 80,000 naira. What is closing capital?",
        steps: ["Closing capital = Opening capital + Net profit - Drawings.", "Insert the figures: 1,000,000 + 260,000 - 80,000.", "1,000,000 + 260,000 = 1,260,000 naira.", "1,260,000 - 80,000 = 1,180,000 naira.", "This closing capital must equal net assets in the balance sheet."],
        answer: "Closing capital is 1,180,000 naira."
      }
    ],
    tips: ["Start the profit and loss account with gross profit brought down, then add other income before deducting expenses.", "Accrued expenses are added to the expense and shown as current liabilities; prepayments are deducted and shown as current assets.", "Buying a fixed asset is capital expenditure, never an expense in the profit and loss account.", "Check the balance sheet balances: net assets must equal closing capital."],
    mistakes: ["Charging the full cost of a motor vehicle to the profit and loss account.", "Forgetting to add net profit to capital in the balance sheet.", "Treating an accrual as a prepayment, or the other way round.", "Showing depreciation as a current asset instead of deducting it from the fixed asset."],
    facts: ["Net profit is added to capital; drawings are deducted from capital.", "Working capital = Current assets - Current liabilities.", "Straight line depreciation charges the same amount each year.", "The balance sheet shows financial position at a date; the profit and loss account covers a period."],
    quiz: [
      { q: "Net profit is calculated as what?", options: ["Gross profit - Expenses only", "Gross profit + Other income - Expenses", "Sales - Purchases", "Capital + Drawings"], answer: 1, explanation: "Net profit = gross profit plus other income, less all running expenses." },
      { q: "Gross profit 620,000 naira, discount received 10,000 naira, expenses 370,000 naira. Net profit is what?", options: ["260,000 naira", "240,000 naira", "630,000 naira", "370,000 naira"], answer: 0, explanation: "Net profit = 620,000 + 10,000 - 370,000 = 260,000 naira." },
      { q: "Buying a motor vehicle for the business is what type of expenditure?", options: ["Revenue expenditure", "Capital expenditure", "An expense in the profit and loss account", "A drawing"], answer: 1, explanation: "Buying a fixed asset is capital expenditure, shown in the balance sheet." },
      { q: "Rent owing at the year end is called what?", options: ["A prepayment", "An accrual", "A bad debt", "Depreciation"], answer: 1, explanation: "An expense incurred but not yet paid is an accrual, shown as a current liability." },
      { q: "Insurance paid in advance is shown in the balance sheet as what?", options: ["A current liability", "A fixed asset", "A current asset", "An expense"], answer: 2, explanation: "A prepayment is an amount paid in advance, shown as a current asset." },
      { q: "A machine costs 800,000 naira with residual value 100,000 naira and 7 years life. Annual straight line depreciation is what?", options: ["80,000 naira", "100,000 naira", "114,286 naira", "700,000 naira"], answer: 1, explanation: "Annual depreciation = (800,000 - 100,000) / 7 = 100,000 naira." },
      { q: "Net book value is calculated as what?", options: ["Cost + Accumulated depreciation", "Cost - Accumulated depreciation", "Cost x Depreciation rate", "Accumulated depreciation - Cost"], answer: 1, explanation: "Net book value = cost less accumulated depreciation." },
      { q: "Working capital is what?", options: ["Fixed assets - Current liabilities", "Current assets - Current liabilities", "Capital + Net profit", "Total assets - Fixed assets"], answer: 1, explanation: "Working capital, or net current assets, equals current assets less current liabilities." },
      { q: "Opening capital 1,000,000 naira, net profit 260,000 naira, drawings 80,000 naira. Closing capital is what?", options: ["1,180,000 naira", "1,340,000 naira", "1,260,000 naira", "920,000 naira"], answer: 0, explanation: "Closing capital = 1,000,000 + 260,000 - 80,000 = 1,180,000 naira." },
      { q: "Which of these is other income in the profit and loss account?", options: ["Salaries", "Rent received", "Carriage outwards", "Bad debts"], answer: 1, explanation: "Rent received is income earned by the business, added to gross profit." },
      { q: "Depreciation is charged to which account?", options: ["Trading account", "Profit and loss account", "Balance sheet only", "Capital account only"], answer: 1, explanation: "Depreciation is an expense charged in the profit and loss account." },
      { q: "Under the reducing balance method, depreciation is charged on what?", options: ["Original cost every year", "The written down value each year", "The residual value only", "The selling price"], answer: 1, explanation: "Reducing balance depreciation charges a fixed percentage on the written down value, so the charge falls each year." },
      { q: "Which of these is a current asset?", options: ["Premises", "Motor vehicle", "Debtors", "Bank loan"], answer: 2, explanation: "Debtors are amounts owed by customers, expected within a year, so they are current assets." },
      { q: "A provision for bad debts is deducted from what?", options: ["Sales", "Debtors", "Creditors", "Capital"], answer: 1, explanation: "The provision for doubtful debts is deducted from debtors in the balance sheet." },
      { q: "The balance sheet shows what?", options: ["Profit for the whole year", "Financial position at a particular date", "Cash received during the year", "Sales for the whole year"], answer: 1, explanation: "The balance sheet is a snapshot of assets, liabilities and capital at one date." }
    ],
    status: "published"
  },
  {
    id: "accounting-05",
    subjectId: "accounting",
    topic: "Partnership Accounts",
    subtopic: "Formation, capital and current accounts",
    title: "Partnership Formation, Capital and Current Accounts",
    order: 5,
    introduction: "A partnership is a business owned by two or more people. This lesson explains how partnerships are formed, the partnership deed, and how capital and current accounts record each partner's stake and drawings.",
    objectives: ["Explain the features of a partnership", "State the contents of a partnership deed", "Distinguish fixed and fluctuating capital accounts", "Prepare partners' capital and current accounts", "Apply the rules that apply when there is no partnership deed"],
    sections: [
      {
        heading: "Features of a Partnership",
        body: "A partnership is an association of two or more persons, usually between 2 and 20, who carry on a business together with a view to profit. In Nigeria, partnerships are governed by the Partnership Act and the partners are jointly liable for the debts of the firm, except for limited partners. Each partner is an agent of the firm and can bind the other partners in the ordinary course of business. A partnership has no separate legal personality from its owners, unlike a company, so the partners own the assets and owe the debts personally. The maximum number of partners is 20, except for professional firms such as accountants and solicitors, which may have more. Partners usually contribute capital, share profits and losses, and take part in management, unless the deed says otherwise."
      },
      {
        heading: "The Partnership Deed",
        body: "The partnership deed, also called the partnership agreement, is the written document that sets out the terms agreed by the partners. It normally states the name of the firm, the nature of the business, the capital contributed by each partner, the profit and loss sharing ratio, the interest to be paid on capital, the interest to be charged on drawings, partners' salaries, and how the firm is to be dissolved. When there is no deed, the Partnership Act applies: profits and losses are shared equally, no interest is paid on capital, no interest is charged on drawings, no partner receives a salary, and a partner who lends money to the firm receives interest at 5 percent per annum. JAMB frequently tests these default rules, so learn them exactly. A deed can be changed only with the agreement of all partners."
      },
      {
        heading: "Capital and Current Accounts",
        body: "Each partner has a capital account, which records the capital they put into the firm and any extra capital added, less capital withdrawn. When capital accounts are fixed, the capital stays unchanged except for permanent additions or withdrawals, and all other items, such as profit share, interest on capital, salary and drawings, go through a separate current account for each partner. When capital accounts are fluctuating, all of those items go directly into the capital account, so its balance changes every year. Under the fixed method, the capital account normally has a credit balance and the current account may be debit or credit. Under the fluctuating method, there is only a capital account per partner. Drawings are recorded on the debit side of the current account, or of the capital account under the fluctuating method, and interest on drawings is also debited there."
      },
      {
        heading: "Interest on Capital and Drawings",
        body: "Interest on capital is a reward for the capital a partner has invested, calculated at the rate in the deed on the capital balance, usually for the full year. For example, a partner with capital of 400,000 naira at 5 percent receives interest of 20,000 naira. Interest on drawings is charged on the amounts a partner has taken out for personal use, because drawings reduce the capital available to the business; it is usually calculated on the drawings, sometimes using the product method if drawings are made at different dates. Interest on capital is credited to the partner's current account and debited to the profit and loss appropriation account. Interest on drawings is debited to the partner's current account and credited to the appropriation account. Neither is a business expense in the ordinary sense: both are ways of sharing the profit."
      }
    ],
    definitions: [
      { term: "Partnership", meaning: "A business owned by two or more persons who share profits, losses and management." },
      { term: "Partnership deed", meaning: "The written agreement setting out the terms between partners, including capital, profit sharing and interest." },
      { term: "Capital account", meaning: "The account recording each partner's capital contributed to the firm." },
      { term: "Current account", meaning: "The account recording a partner's share of profit, interest, salary and drawings when capital is fixed." },
      { term: "Interest on capital", meaning: "Interest paid to a partner on the capital invested, credited to the partner's current account." },
      { term: "Interest on drawings", meaning: "Interest charged to a partner on amounts taken for personal use, debited to the current account." }
    ],
    formulas: ["Interest on capital = Capital x Rate x Time.", "Interest on drawings = Drawings x Rate x Time.", "Fixed capital: capital account stays fixed; profit, interest, salary and drawings go to the current account.", "Fluctuating capital: all items go through the capital account.", "No deed: profits shared equally; no interest on capital or drawings; no salary; 5 percent on a partner loan."],
    examples: [
      {
        title: "Interest on capital",
        problem: "Ada has capital of 400,000 naira and Bola has capital of 600,000 naira. The deed provides interest on capital at 5 percent per annum. Calculate the interest for each partner.",
        steps: ["Ada: 400,000 x 5 / 100 = 20,000 naira.", "Bola: 600,000 x 5 / 100 = 30,000 naira.", "Total interest on capital = 20,000 + 30,000 = 50,000 naira.", "Each amount is credited to the partner's current account.", "The total is debited to the appropriation account."],
        answer: "Ada receives 20,000 naira and Bola receives 30,000 naira, a total of 50,000 naira."
      },
      {
        title: "Fixed capital and current account",
        problem: "Chidi has fixed capital of 500,000 naira. During the year he is credited with profit share 120,000 naira and interest on capital 25,000 naira, and debited with drawings 60,000 naira. What is his current account balance?",
        steps: ["Current account credits: 120,000 + 25,000 = 145,000 naira.", "Current account debits: drawings 60,000 naira.", "Balance = 145,000 - 60,000 = 85,000 naira credit.", "The fixed capital account remains at 500,000 naira credit.", "In the balance sheet, Chidi is shown with capital 500,000 naira plus current account 85,000 naira."],
        answer: "Chidi's current account has a credit balance of 85,000 naira; his capital remains 500,000 naira."
      },
      {
        title: "No partnership deed",
        problem: "Two partners have no deed. One contributed 800,000 naira and the other 200,000 naira. The profit is 300,000 naira. How is it shared?",
        steps: ["With no deed, the Partnership Act applies.", "Profits and losses are shared equally, regardless of capital.", "Each partner receives 300,000 / 2 = 150,000 naira.", "No interest on capital is paid, even though capital differs.", "No salary is paid to either partner."],
        answer: "Each partner receives 150,000 naira; profits are shared equally."
      }
    ],
    tips: ["Learn the no-deed rules exactly: equal profit sharing, no interest on capital or drawings, no salary, 5 percent on a partner loan.", "Fixed capital means a separate current account; fluctuating capital means everything goes through the capital account.", "Interest on capital is a credit to the current account; interest on drawings is a debit.", "Drawings always reduce a partner's current or capital account."],
    mistakes: ["Sharing profit in the capital ratio when there is no deed; with no deed it is equal.", "Putting profit share and drawings in the capital account when capital is fixed.", "Treating interest on capital as an expense in the profit and loss account instead of an appropriation.", "Forgetting that a current account can have a debit balance if drawings exceed credits."],
    facts: ["The maximum number of partners is generally 20, except for professional firms.", "Partners are jointly liable for the debts of the firm.", "With no deed, a partner who lends to the firm gets interest at 5 percent per annum.", "Interest on capital rewards investment; interest on drawings penalises early withdrawal."],
    quiz: [
      { q: "A partnership is a business owned by how many people?", options: ["One person only", "Two or more people", "At least 50 people", "Only companies"], answer: 1, explanation: "A partnership is owned by two or more persons carrying on business together for profit." },
      { q: "What is the partnership deed?", options: ["A loan agreement with a bank", "The written agreement between partners", "A tax return", "A sales invoice"], answer: 1, explanation: "The deed is the written agreement setting out capital, profit sharing, interest and other terms." },
      { q: "With no partnership deed, how are profits shared?", options: ["In the capital ratio", "Equally", "By age of partners", "By who works hardest"], answer: 1, explanation: "Under the Partnership Act, with no deed, profits and losses are shared equally." },
      { q: "With no deed, what interest is paid on a loan from a partner to the firm?", options: ["No interest", "5 percent per annum", "10 percent per annum", "The bank rate"], answer: 1, explanation: "With no deed, a partner who lends money to the firm receives interest at 5 percent per annum." },
      { q: "Ada has capital of 400,000 naira at 5 percent interest on capital. How much interest does she receive?", options: ["40,000 naira", "20,000 naira", "10,000 naira", "25,000 naira"], answer: 1, explanation: "400,000 x 5 / 100 = 20,000 naira." },
      { q: "When capital accounts are fixed, where are drawings recorded?", options: ["In the capital account", "In the current account", "In the trading account", "In the bank account only"], answer: 1, explanation: "With fixed capital, drawings, profit share, interest and salary go through the current account." },
      { q: "Interest on drawings is recorded as what in the partner's current account?", options: ["A credit", "A debit", "No entry", "A balance brought down"], answer: 1, explanation: "Interest on drawings is charged to the partner, so it is debited to the current account." },
      { q: "Which of these is true of partners' liability?", options: ["Partners have limited liability", "Partners are jointly liable for firm debts", "Only the senior partner is liable", "The firm alone is liable"], answer: 1, explanation: "Partners in an ordinary partnership are jointly liable for the debts of the firm." },
      { q: "With no deed, is interest paid on capital?", options: ["Yes, at 5 percent", "Yes, at 10 percent", "No interest is paid", "Yes, at the bank rate"], answer: 2, explanation: "With no deed, no interest is paid on capital." },
      { q: "Chidi's current account has credits of 145,000 naira and drawings of 60,000 naira. What is the balance?", options: ["85,000 naira credit", "85,000 naira debit", "205,000 naira credit", "60,000 naira debit"], answer: 0, explanation: "145,000 - 60,000 = 85,000 naira credit." },
      { q: "Under fluctuating capital, where does a partner's share of profit go?", options: ["To a separate current account", "Directly to the capital account", "To the trading account", "To the bank account"], answer: 1, explanation: "With fluctuating capital, profit share, interest, salary and drawings all go through the capital account." },
      { q: "A partnership deed can be changed only with what?", options: ["The agreement of all partners", "A court order only", "The senior partner's decision", "A bank's approval"], answer: 0, explanation: "The deed is an agreement between all partners, so it can be changed only with all their agreement." },
      { q: "Interest on capital is debited to which account?", options: ["The partner's capital account", "The profit and loss appropriation account", "The trading account", "The bank account"], answer: 1, explanation: "Interest on capital is an appropriation of profit, debited to the appropriation account." },
      { q: "Which partner receives a salary if the deed is silent?", options: ["The senior partner", "The managing partner", "No partner receives a salary", "All partners equally"], answer: 2, explanation: "With no deed, no partner is entitled to a salary." },
      { q: "A partner lends 200,000 naira to the firm and there is no deed. How much interest per year?", options: ["5,000 naira", "10,000 naira", "20,000 naira", "No interest"], answer: 1, explanation: "5 percent of 200,000 naira is 10,000 naira per year." }
    ],
    status: "published"
  },
  {
    id: "accounting-06",
    subjectId: "accounting",
    topic: "Partnership Accounts",
    subtopic: "Appropriation account, admission and goodwill",
    title: "Partnership Appropriation, Goodwill and Admission",
    order: 6,
    introduction: "The appropriation account shows how a partnership's net profit is shared. This lesson also explains goodwill when a new partner joins and how the profit sharing ratio changes.",
    objectives: ["Prepare a profit and loss appropriation account", "Share residual profit in the agreed ratio", "Explain goodwill and how it arises", "Account for the admission of a new partner", "Calculate a new profit sharing ratio and a sacrificing ratio"],
    sections: [
      {
        heading: "The Appropriation Account",
        body: "After the profit and loss account gives the net profit, the appropriation account shows how that profit is shared among the partners. Interest on capital is debited, partners' salaries are debited, and interest on drawings is credited, because it adds back to the profit available for sharing. The remaining profit, called the residual profit, is then shared in the profit and loss sharing ratio stated in the deed. For example, if net profit is 500,000 naira, interest on capital is 50,000 naira, a partner's salary is 60,000 naira, interest on drawings is 10,000 naira, the residual profit is 500,000 - 50,000 - 60,000 + 10,000 = 400,000 naira. If two partners share equally, each receives 200,000 naira. Each partner's share is credited to their current account, or to their capital account if capital is fluctuating."
      },
      {
        heading: "Goodwill",
        body: "Goodwill is the value of a business above the value of its net assets, arising from its reputation, customer base, location and skilled staff. It is an intangible asset. In a partnership, goodwill arises when a new partner is admitted, because the new partner benefits from the reputation built up by the existing partners, or when a partner retires or dies. Goodwill is not normally shown in the books of a sole trader or a partnership unless it has been bought for a price. When a new partner joins, the existing partners are usually credited with goodwill in their old profit sharing ratio, and the new partner is debited with their share of goodwill, because the new partner is buying into the goodwill. Goodwill may be retained in the books or written off against the partners' capital accounts, as the deed directs."
      },
      {
        heading: "Admission of a New Partner",
        body: "When a new partner is admitted, they usually bring in capital, and sometimes a premium for goodwill. The new partner's capital is credited to their capital account and debited to cash or bank. The premium for goodwill is credited to the old partners in their old ratio and debited to the new partner's capital or current account, or to cash if paid privately outside the books. The old partners' profit sharing ratio changes, because the new partner now takes a share of future profits. If the old partners shared profits equally and the new partner is given one-third, the old partners each take one-third of the remaining two-thirds, which is one-third each, so the new ratio is 1:1:1. The sacrificing ratio shows how much each old partner has given up: old ratio minus new ratio. Goodwill valuation methods include the average profits method, the super profits method and the capitalisation method."
      },
      {
        heading: "Valuing Goodwill",
        body: "Under the average profits method, goodwill equals the average profit over a number of years multiplied by an agreed number of years' purchase. For example, if average profit is 200,000 naira and goodwill is valued at 2 years' purchase, goodwill is 400,000 naira. Under the super profits method, super profit equals average profit less normal profit, where normal profit is capital employed multiplied by the normal rate of return; goodwill equals super profit multiplied by the number of years' purchase. For example, if average profit is 200,000 naira, capital employed is 1,000,000 naira and the normal rate is 10 percent, normal profit is 100,000 naira, super profit is 100,000 naira, and at 2 years' purchase goodwill is 200,000 naira. Under the capitalisation method, the capitalised value of average profit is average profit divided by the normal rate, and goodwill equals that capitalised value less capital employed. JAMB usually tests the average profits and super profits methods with simple figures."
      }
    ],
    definitions: [
      { term: "Appropriation account", meaning: "The account showing how a partnership's net profit is shared among partners." },
      { term: "Residual profit", meaning: "Net profit less interest on capital and salaries, plus interest on drawings, shared in the profit sharing ratio." },
      { term: "Goodwill", meaning: "The value of a business above its net assets, from reputation, customers and location." },
      { term: "Sacrificing ratio", meaning: "Old profit sharing ratio minus new ratio; how much each old partner gave up to a new partner." },
      { term: "Super profit", meaning: "Average profit less normal profit on capital employed." },
      { term: "Premium for goodwill", meaning: "An amount paid by a new partner to buy into the goodwill built by the old partners." }
    ],
    formulas: ["Residual profit = Net profit - Interest on capital - Salaries + Interest on drawings.", "Goodwill (average profits) = Average profit x Years' purchase.", "Normal profit = Capital employed x Normal rate of return.", "Super profit = Average profit - Normal profit.", "Goodwill (super profits) = Super profit x Years' purchase."],
    examples: [
      {
        title: "Sharing residual profit",
        problem: "Net profit 500,000 naira, interest on capital 50,000 naira, partner salary 60,000 naira, interest on drawings 10,000 naira. Two partners share equally. How much does each receive as residual profit?",
        steps: ["Residual profit = 500,000 - 50,000 - 60,000 + 10,000.", "500,000 - 50,000 = 450,000 naira.", "450,000 - 60,000 = 390,000 naira.", "390,000 + 10,000 = 400,000 naira residual profit.", "Shared equally, each partner receives 200,000 naira."],
        answer: "Residual profit is 400,000 naira; each partner receives 200,000 naira."
      },
      {
        title: "Goodwill by average profits",
        problem: "A firm's profits for 3 years are 180,000 naira, 200,000 naira and 220,000 naira. Goodwill is valued at 2 years' purchase of average profit. Calculate goodwill.",
        steps: ["Total profit = 180,000 + 200,000 + 220,000 = 600,000 naira.", "Average profit = 600,000 / 3 = 200,000 naira.", "Goodwill = Average profit x Years' purchase = 200,000 x 2.", "Goodwill = 400,000 naira.", "This is the value credited to the old partners on admission."],
        answer: "Goodwill is 400,000 naira."
      },
      {
        title: "Goodwill by super profits",
        problem: "Average profit 200,000 naira, capital employed 1,000,000 naira, normal rate 10 percent, years' purchase 2. Calculate goodwill.",
        steps: ["Normal profit = 1,000,000 x 10 / 100 = 100,000 naira.", "Super profit = 200,000 - 100,000 = 100,000 naira.", "Goodwill = Super profit x Years' purchase = 100,000 x 2.", "Goodwill = 200,000 naira.", "Check: the firm earns 100,000 naira above a normal return, worth 2 years of that excess."],
        answer: "Goodwill is 200,000 naira."
      }
    ],
    tips: ["In the appropriation account, interest on capital and salaries are debits; interest on drawings is a credit.", "Residual profit is shared in the profit and loss ratio, not the capital ratio.", "Goodwill on admission is credited to old partners in their old ratio.", "Sacrificing ratio = old ratio minus new ratio; use it to share goodwill."],
    mistakes: ["Sharing the whole net profit in the ratio instead of the residual profit after interest and salaries.", "Crediting goodwill to the new partner instead of the old partners.", "Forgetting to add back interest on drawings in the appropriation account.", "Using total profit instead of average profit in the average profits method."],
    facts: ["The appropriation account follows the profit and loss account.", "Goodwill is an intangible asset and is not normally shown unless bought.", "A new partner usually brings capital and a premium for goodwill.", "Super profit = average profit less normal profit."],
    quiz: [
      { q: "What does the appropriation account show?", options: ["Gross profit", "How net profit is shared among partners", "Total sales", "The bank balance"], answer: 1, explanation: "The appropriation account shows how the net profit is shared, after interest, salaries and drawings interest." },
      { q: "Net profit 500,000 naira, interest on capital 50,000 naira, salary 60,000 naira, interest on drawings 10,000 naira. Residual profit is what?", options: ["400,000 naira", "390,000 naira", "410,000 naira", "500,000 naira"], answer: 0, explanation: "Residual profit = 500,000 - 50,000 - 60,000 + 10,000 = 400,000 naira." },
      { q: "Interest on drawings in the appropriation account is what?", options: ["A debit", "A credit", "Not shown", "A liability"], answer: 1, explanation: "Interest on drawings is credited in the appropriation account, adding to the profit available for sharing." },
      { q: "What is goodwill?", options: ["The value of stock", "The value of a business above its net assets", "The bank overdraft", "A partner's capital"], answer: 1, explanation: "Goodwill is the value above net assets from reputation, customers, location and skill." },
      { q: "Average profit is 200,000 naira and goodwill is 2 years' purchase. Goodwill is what?", options: ["100,000 naira", "200,000 naira", "400,000 naira", "600,000 naira"], answer: 2, explanation: "Goodwill = 200,000 x 2 = 400,000 naira." },
      { q: "On admission of a new partner, goodwill is credited to whom?", options: ["The new partner", "The old partners in their old ratio", "The bank", "All partners equally"], answer: 1, explanation: "Goodwill built by the old partners is credited to them in their old profit sharing ratio." },
      { q: "Normal profit is 100,000 naira and average profit is 200,000 naira. Super profit is what?", options: ["300,000 naira", "100,000 naira", "200,000 naira", "50,000 naira"], answer: 1, explanation: "Super profit = average profit - normal profit = 200,000 - 100,000 = 100,000 naira." },
      { q: "Capital employed is 1,000,000 naira and the normal rate is 10 percent. Normal profit is what?", options: ["10,000 naira", "100,000 naira", "1,000,000 naira", "110,000 naira"], answer: 1, explanation: "Normal profit = 1,000,000 x 10 / 100 = 100,000 naira." },
      { q: "What is the sacrificing ratio?", options: ["New ratio minus old ratio", "Old ratio minus new ratio", "Capital ratio", "Drawings ratio"], answer: 1, explanation: "The sacrificing ratio is the old ratio minus the new ratio for each old partner." },
      { q: "A partner's salary in the appropriation account is what?", options: ["A credit", "A debit", "Not shown", "A current asset"], answer: 1, explanation: "A partner's salary is debited in the appropriation account before residual profit is shared." },
      { q: "Residual profit is shared in which ratio?", options: ["Capital ratio", "Profit and loss sharing ratio", "Drawings ratio", "Equal shares always"], answer: 1, explanation: "Residual profit is shared in the profit and loss sharing ratio in the deed." },
      { q: "When a new partner brings capital, which account is credited?", options: ["Cash account", "The new partner's capital account", "Goodwill account", "Sales account"], answer: 1, explanation: "Capital brought in is credited to the new partner's capital account and debited to cash or bank." },
      { q: "Goodwill is normally shown in the books only when what?", options: ["The firm is profitable", "It has been bought for a price", "A partner retires", "The firm is a company"], answer: 1, explanation: "Internally generated goodwill is not normally shown; goodwill is recognised when bought." },
      { q: "Super profit of 100,000 naira at 2 years' purchase gives goodwill of what?", options: ["50,000 naira", "100,000 naira", "200,000 naira", "300,000 naira"], answer: 2, explanation: "Goodwill = 100,000 x 2 = 200,000 naira." },
      { q: "Each partner's share of residual profit is credited to what?", options: ["The trading account", "The partner's current account, or capital account if fluctuating", "The bank account", "The suspense account"], answer: 1, explanation: "The profit share is credited to the current account when capital is fixed, or to the capital account when it is fluctuating." }
    ],
    status: "published"
  },
  {
    id: "accounting-07",
    subjectId: "accounting",
    topic: "Company Accounts",
    subtopic: "Share capital and the issue of shares",
    title: "Company Accounts: Share Capital and Issue of Shares",
    order: 7,
    introduction: "A company is owned by shareholders and has a separate legal personality. This lesson explains authorised and issued share capital, ordinary and preference shares, and how shares are issued at par, at a premium and at a discount.",
    objectives: ["Explain the features of a limited liability company", "Distinguish authorised, issued, called-up and paid-up capital", "Distinguish ordinary and preference shares", "Account for the issue of shares at par, at a premium and at a discount", "Calculate share premium and prepare the share capital section of a balance sheet"],
    sections: [
      {
        heading: "Features of a Company",
        body: "A company is a business owned by shareholders, with a separate legal personality from its owners, so it can own property, sue and be sued in its own name. The liability of shareholders in a limited liability company is limited to the amount unpaid on their shares, unlike partners, who are jointly liable. A company is formed by registration under the Companies and Allied Matters Act in Nigeria, and it has perpetual succession: it continues even if shareholders die or sell their shares. A public limited company, a Plc, can offer its shares to the public, while a private limited company, a Ltd, cannot. Shareholders elect directors to manage the company, and the directors report to shareholders at the annual general meeting. The main advantage of a company is limited liability and the ability to raise large amounts of capital; the main disadvantages are greater regulation, cost and disclosure."
      },
      {
        heading: "Share Capital",
        body: "Authorised share capital, also called nominal or registered capital, is the maximum amount of share capital a company may issue, stated in its memorandum of association. Issued share capital is the part of the authorised capital that has actually been issued to shareholders. Called-up capital is the part of the issued capital that the company has asked shareholders to pay, and paid-up capital is the part that has actually been paid. For example, a company authorised to issue 1,000,000 ordinary shares of 1 naira each has authorised capital of 1,000,000 naira; if it issues 600,000 shares, issued capital is 600,000 naira; if it calls up 0.80 naira per share, called-up capital is 480,000 naira; if shareholders have paid 450,000 naira, paid-up capital is 450,000 naira and calls in arrears are 30,000 naira. Ordinary shares, also called equity shares, carry voting rights and receive dividends after preference shareholders. Preference shares receive a fixed rate of dividend before ordinary shareholders, and usually have no voting rights."
      },
      {
        heading: "Issue of Shares at Par, Premium and Discount",
        body: "Shares are issued at par when the issue price equals the nominal value, for example a 1 naira share issued at 1 naira. They are issued at a premium when the issue price is above the nominal value, for example a 1 naira share issued at 1.50 naira; the extra 0.50 naira per share is share premium, which is credited to a separate share premium account and is a capital reserve, not a profit. They are issued at a discount when the issue price is below the nominal value, which is now heavily restricted under company law. On issue, the entries are to debit bank with the cash received, credit share capital with the nominal value, and credit share premium with the excess if any. For example, issuing 100,000 shares of 1 naira at 1.50 naira gives bank 150,000 naira, share capital 100,000 naira and share premium 50,000 naira. Share premium may be used to issue bonus shares or to write off preliminary expenses, but it may not be paid out as dividend."
      },
      {
        heading: "Debentures and Reserves",
        body: "A debenture is a long-term loan to a company, usually secured on the company's assets, carrying a fixed rate of interest, for example 10 percent debentures. Debenture interest is an expense charged in the profit and loss account whether or not the company makes a profit, and debenture holders are creditors, not owners, with no voting rights. Reserves are profits kept in the business rather than paid out as dividends. Revenue reserves, such as the general reserve and retained profit, come from trading profits and may be paid as dividends. Capital reserves, such as share premium and revaluation reserve, come from capital transactions and may not be paid as dividends. A company may also issue bonus shares, free shares given to existing shareholders from reserves, which capitalise profits and increase issued share capital without bringing in new cash."
      }
    ],
    definitions: [
      { term: "Authorised share capital", meaning: "The maximum share capital a company may issue, stated in its memorandum." },
      { term: "Issued share capital", meaning: "The part of authorised capital actually issued to shareholders." },
      { term: "Ordinary share", meaning: "An equity share carrying voting rights, with dividends paid after preference shareholders." },
      { term: "Preference share", meaning: "A share carrying a fixed rate of dividend paid before ordinary shareholders." },
      { term: "Share premium", meaning: "The excess of the issue price of a share over its nominal value; a capital reserve." },
      { term: "Debenture", meaning: "A long-term loan to a company, carrying fixed interest and usually secured on its assets." }
    ],
    formulas: ["Authorised capital = Number of authorised shares x Nominal value per share.", "Share premium per share = Issue price - Nominal value.", "Total share premium = Number of shares issued x Premium per share.", "Paid-up capital = Called-up capital - Calls in arrears.", "Debenture interest = Debenture amount x Interest rate."],
    examples: [
      {
        title: "Issuing shares at a premium",
        problem: "A company issues 100,000 ordinary shares of 1 naira each at 1.50 naira per share. Show the amounts for share capital and share premium.",
        steps: ["Nominal value = 100,000 x 1 naira = 100,000 naira, credited to share capital.", "Issue price per share is 1.50 naira, so premium per share = 1.50 - 1.00 = 0.50 naira.", "Total share premium = 100,000 x 0.50 = 50,000 naira.", "Cash received = 100,000 x 1.50 = 150,000 naira, debited to bank.", "Check: 100,000 + 50,000 = 150,000 naira, so the entry balances."],
        answer: "Share capital 100,000 naira; share premium 50,000 naira; bank 150,000 naira."
      },
      {
        title: "Authorised, issued and called-up capital",
        problem: "A company is authorised to issue 1,000,000 shares of 1 naira each. It issues 600,000 shares and calls up 0.80 naira per share. Shareholders pay 450,000 naira. Calculate authorised, issued, called-up and paid-up capital.",
        steps: ["Authorised capital = 1,000,000 x 1 = 1,000,000 naira.", "Issued capital = 600,000 x 1 = 600,000 naira.", "Called-up capital = 600,000 x 0.80 = 480,000 naira.", "Paid-up capital = 450,000 naira, the amount actually paid.", "Calls in arrears = 480,000 - 450,000 = 30,000 naira."],
        answer: "Authorised 1,000,000 naira; issued 600,000 naira; called-up 480,000 naira; paid-up 450,000 naira."
      },
      {
        title: "Debenture interest",
        problem: "A company has 500,000 naira of 10 percent debentures. Calculate the annual debenture interest.",
        steps: ["Debenture interest = Debenture amount x Rate.", "Interest = 500,000 x 10 / 100.", "500,000 x 10 = 5,000,000; divided by 100 = 50,000 naira.", "This interest is charged in the profit and loss account.", "It is paid whether or not the company makes a profit."],
        answer: "Annual debenture interest is 50,000 naira."
      }
    ],
    tips: ["Share premium is a capital reserve, never a profit and never available as dividend.", "Ordinary shareholders are paid dividends after preference shareholders.", "Called-up capital is what the company has asked for; paid-up is what has actually been received.", "Debenture interest is an expense, while a dividend is an appropriation of profit."],
    mistakes: ["Crediting the whole issue price to share capital instead of splitting nominal value and premium.", "Confusing authorised capital with issued capital.", "Treating debenture holders as owners; they are creditors.", "Paying a dividend out of share premium."],
    facts: ["A company has a separate legal personality from its shareholders.", "Shareholders in a limited company have limited liability.", "Preference shareholders receive a fixed dividend before ordinary shareholders.", "A public limited company can offer shares to the public; a private limited company cannot."],
    quiz: [
      { q: "What is the main advantage of limited liability for shareholders?", options: ["They pay no tax", "Their liability is limited to the amount unpaid on their shares", "They control the company daily", "They receive fixed dividends"], answer: 1, explanation: "In a limited company, a shareholder can lose no more than the amount unpaid on their shares." },
      { q: "Authorised share capital is what?", options: ["Capital actually paid by shareholders", "The maximum capital a company may issue", "Capital called up so far", "Retained profit"], answer: 1, explanation: "Authorised capital is the maximum stated in the memorandum that the company may issue." },
      { q: "A company issues 100,000 shares of 1 naira at 1.50 naira. What is the share premium?", options: ["100,000 naira", "150,000 naira", "50,000 naira", "250,000 naira"], answer: 2, explanation: "Premium per share is 0.50 naira, so total premium is 100,000 x 0.50 = 50,000 naira." },
      { q: "Which shares receive a fixed dividend before ordinary shareholders?", options: ["Ordinary shares", "Preference shares", "Bonus shares", "Deferred shares"], answer: 1, explanation: "Preference shareholders receive a fixed rate of dividend before ordinary shareholders." },
      { q: "A company issues 600,000 shares of 1 naira and calls up 0.80 naira per share. Called-up capital is what?", options: ["600,000 naira", "480,000 naira", "450,000 naira", "1,000,000 naira"], answer: 1, explanation: "Called-up capital = 600,000 x 0.80 = 480,000 naira." },
      { q: "Share premium may be used for what?", options: ["Paying dividends", "Issuing bonus shares", "Paying salaries", "Buying stock"], answer: 1, explanation: "Share premium is a capital reserve and may be used to issue bonus shares, but not to pay dividends." },
      { q: "A debenture holder is best described as what?", options: ["An owner of the company", "A creditor of the company", "A director", "A preference shareholder"], answer: 1, explanation: "A debenture is a loan to the company, so the holder is a creditor, not an owner." },
      { q: "Debenture interest of 10 percent on 500,000 naira is what per year?", options: ["5,000 naira", "50,000 naira", "500,000 naira", "10,000 naira"], answer: 1, explanation: "500,000 x 10 / 100 = 50,000 naira per year." },
      { q: "Which company can offer its shares to the public?", options: ["A private limited company", "A public limited company", "A partnership", "A sole trader"], answer: 1, explanation: "A public limited company, a Plc, may offer shares to the public; a private company may not." },
      { q: "Ordinary shares are also called what?", options: ["Preference shares", "Equity shares", "Debentures", "Bonus shares"], answer: 1, explanation: "Ordinary shares are equity shares, carrying voting rights and residual claims on profit." },
      { q: "Paid-up capital is calculated as what?", options: ["Authorised capital - Issued capital", "Called-up capital - Calls in arrears", "Issued capital + Share premium", "Nominal value x Issue price"], answer: 1, explanation: "Paid-up capital is the called-up capital actually paid, so called-up less calls in arrears." },
      { q: "Shares issued at a price above nominal value are issued at what?", options: ["Par", "A premium", "A discount", "A loss"], answer: 1, explanation: "An issue price above nominal value is an issue at a premium." },
      { q: "Bonus shares are shares given to existing shareholders for what?", options: ["Cash", "Free, from reserves", "A loan", "A debenture"], answer: 1, explanation: "Bonus shares are free shares issued from reserves to existing shareholders." },
      { q: "A company has separate legal personality. What does this mean?", options: ["It can own property and sue in its own name", "It has no directors", "It pays no tax", "It cannot borrow money"], answer: 0, explanation: "Separate legal personality means the company itself can own property, sue and be sued." },
      { q: "Which of these is a capital reserve?", options: ["General reserve", "Retained profit", "Share premium", "Trading profit"], answer: 2, explanation: "Share premium is a capital reserve from a capital transaction, unlike revenue reserves from trading profits." }
    ],
    status: "published"
  },
  {
    id: "accounting-08",
    subjectId: "accounting",
    topic: "Company Accounts",
    subtopic: "Published accounts and appropriation of profit",
    title: "Published Accounts and Appropriation of Companies",
    order: 8,
    introduction: "Companies must publish their accounts and show how profit is shared. This lesson explains the profit and loss appropriation account, dividends, reserves, taxation and the published balance sheet.",
    objectives: ["Prepare a company profit and loss appropriation account", "Distinguish interim and final dividends", "Explain corporation tax and its treatment", "Transfer profits to reserves", "Prepare the shareholders' funds section of a company balance sheet"],
    sections: [
      {
        heading: "The Appropriation Account of a Company",
        body: "A company's profit and loss account ends with the net profit for the year, and the appropriation account then shows how that profit is used. First, corporation tax on the year's profit is deducted, because tax is a charge on profit. Then the balance is added to the retained profit brought forward from last year, to give the total profit available for appropriation. From this, the directors propose dividends: preference dividends at the fixed rate, and ordinary dividends at a rate per share or a total amount decided by the directors and approved by shareholders. Transfers to reserves, such as the general reserve, are also deducted. The balance left is retained profit carried forward to the next year. For example, net profit 800,000 naira less tax 200,000 naira gives 600,000 naira; plus retained profit brought forward 100,000 naira gives 700,000 naira available; less dividends 300,000 naira and transfer to general reserve 100,000 naira leaves 300,000 naira carried forward."
      },
      {
        heading: "Dividends",
        body: "A dividend is a payment of profit to shareholders, approved by the directors and, for a final dividend, by shareholders at the annual general meeting. Preference dividends are paid at the fixed rate on preference share capital, and must be paid before any ordinary dividend. Ordinary dividends are paid at a rate decided by the directors, often expressed as a percentage of nominal value or as an amount per share. An interim dividend is paid during the year, before the final accounts are known, and a final dividend is proposed at the year end and paid after approval. Dividends are an appropriation of profit, not an expense, so they are not deducted in arriving at net profit. A dividend may only be paid out of distributable profits, and a proposed final dividend is shown as a current liability in the balance sheet if it has been declared. If a company makes a loss, it normally pays no dividend."
      },
      {
        heading: "Taxation and Reserves",
        body: "Corporation tax is charged on a company's taxable profit and is shown as a deduction in the profit and loss account, after net profit and before the appropriation of the remaining profit. The tax figure in the accounts is the estimated tax for the year, and any tax unpaid at the year end is shown as a current liability. Reserves are profits retained in the business. The general reserve is a revenue reserve set aside for general purposes, and a transfer to it is decided by the directors. Retained profit, also called the profit and loss balance, is the accumulated profit not paid out as dividend or transferred to other reserves. Together, share capital plus reserves make up shareholders' funds, also called the equity of the company. A company with large reserves has kept much of its profit for growth rather than paying it all out."
      },
      {
        heading: "The Published Balance Sheet",
        body: "A company's published balance sheet follows the same principles as a sole trader's, but with the capital section replaced by shareholders' funds. Fixed assets are shown at cost less depreciation, current assets include stock, debtors, prepayments and cash, and current liabilities include creditors, accruals, tax payable and proposed dividends. Long-term liabilities include debentures and long-term loans. Shareholders' funds are shown as issued share capital, plus share premium and other capital reserves, plus revenue reserves and retained profit. The balance sheet must balance: total assets less total liabilities equals shareholders' funds. Published accounts must give a true and fair view, be audited by independent auditors, and be filed as required by the Companies and Allied Matters Act. The directors' report and the auditors' report accompany the accounts."
      }
    ],
    definitions: [
      { term: "Corporation tax", meaning: "Tax charged on a company's taxable profit, deducted after net profit." },
      { term: "Dividend", meaning: "A payment of profit to shareholders, an appropriation rather than an expense." },
      { term: "Interim dividend", meaning: "A dividend paid during the year, before the final accounts are known." },
      { term: "Final dividend", meaning: "A dividend proposed at the year end and paid after shareholder approval." },
      { term: "Retained profit", meaning: "Accumulated profit kept in the business, not paid as dividend or transferred to reserves." },
      { term: "Shareholders' funds", meaning: "Issued share capital plus all reserves; the equity of the company." }
    ],
    formulas: ["Profit available for appropriation = Net profit - Tax + Retained profit brought forward.", "Retained profit carried forward = Profit available - Dividends - Transfers to reserves.", "Shareholders' funds = Share capital + Share premium + Revenue reserves + Retained profit.", "Preference dividend = Preference share capital x Fixed rate.", "Ordinary dividend per share = Total ordinary dividend / Number of ordinary shares."],
    examples: [
      {
        title: "Appropriating company profit",
        problem: "Net profit 800,000 naira, tax 200,000 naira, retained profit brought forward 100,000 naira, dividends 300,000 naira, transfer to general reserve 100,000 naira. Calculate retained profit carried forward.",
        steps: ["Profit after tax = 800,000 - 200,000 = 600,000 naira.", "Profit available = 600,000 + 100,000 = 700,000 naira.", "Deduct dividends: 700,000 - 300,000 = 400,000 naira.", "Deduct transfer to reserve: 400,000 - 100,000 = 300,000 naira.", "Retained profit carried forward is 300,000 naira."],
        answer: "Retained profit carried forward is 300,000 naira."
      },
      {
        title: "Preference dividend",
        problem: "A company has 200,000 naira of 8 percent preference shares. Calculate the annual preference dividend.",
        steps: ["Preference dividend = Preference capital x Rate.", "Dividend = 200,000 x 8 / 100.", "200,000 x 8 = 1,600,000; divided by 100 = 16,000 naira.", "This is paid before any ordinary dividend.", "If profit is insufficient, the dividend may be in arrears for cumulative preference shares."],
        answer: "The annual preference dividend is 16,000 naira."
      },
      {
        title: "Shareholders' funds",
        problem: "Issued share capital 600,000 naira, share premium 50,000 naira, general reserve 100,000 naira, retained profit 300,000 naira. Calculate shareholders' funds.",
        steps: ["Add share capital and share premium: 600,000 + 50,000 = 650,000 naira.", "Add general reserve: 650,000 + 100,000 = 750,000 naira.", "Add retained profit: 750,000 + 300,000 = 1,050,000 naira.", "This is the equity of the company.", "It must equal net assets in the balance sheet."],
        answer: "Shareholders' funds are 1,050,000 naira."
      }
    ],
    tips: ["Tax is deducted after net profit, before appropriation; it is a charge, not an appropriation.", "Preference dividends are paid before ordinary dividends.", "Dividends are appropriations, not expenses, so they never reduce net profit.", "Retained profit carried forward = profit available less dividends less transfers to reserves."],
    mistakes: ["Deducting dividends in the profit and loss account as if they were expenses.", "Paying ordinary dividends before preference dividends.", "Forgetting to add retained profit brought forward to profit after tax.", "Treating share premium as a revenue reserve available for dividends."],
    facts: ["A dividend can only be paid out of distributable profits.", "An interim dividend is paid during the year; a final dividend is proposed at the year end.", "Corporation tax unpaid at the year end is a current liability.", "Shareholders' funds = share capital + reserves."],
    quiz: [
      { q: "In a company, corporation tax is deducted at which stage?", options: ["Before gross profit", "After net profit, before appropriation", "After dividends", "In the trading account"], answer: 1, explanation: "Corporation tax is charged on profit and deducted after net profit, before the remaining profit is appropriated." },
      { q: "Net profit 800,000 naira, tax 200,000 naira, retained profit brought forward 100,000 naira. Profit available is what?", options: ["500,000 naira", "600,000 naira", "700,000 naira", "900,000 naira"], answer: 2, explanation: "Profit after tax is 600,000 naira, plus 100,000 naira brought forward, gives 700,000 naira available." },
      { q: "Profit available 700,000 naira, dividends 300,000 naira, transfer to reserve 100,000 naira. Retained profit carried forward is what?", options: ["300,000 naira", "400,000 naira", "100,000 naira", "700,000 naira"], answer: 0, explanation: "700,000 - 300,000 - 100,000 = 300,000 naira carried forward." },
      { q: "A dividend is best described as what?", options: ["An expense", "An appropriation of profit", "A liability to the bank", "A fixed asset"], answer: 1, explanation: "A dividend is a distribution of profit to shareholders, an appropriation, not an expense." },
      { q: "Preference shares of 200,000 naira at 8 percent give an annual dividend of what?", options: ["8,000 naira", "16,000 naira", "25,000 naira", "200,000 naira"], answer: 1, explanation: "200,000 x 8 / 100 = 16,000 naira." },
      { q: "Which dividend is paid during the year, before final accounts are known?", options: ["Final dividend", "Interim dividend", "Preference dividend", "Bonus dividend"], answer: 1, explanation: "An interim dividend is paid during the year; a final dividend is proposed at the year end." },
      { q: "Shareholders' funds are made up of what?", options: ["Fixed assets + Current assets", "Share capital + Reserves", "Debtors + Cash", "Debentures + Loans"], answer: 1, explanation: "Shareholders' funds, or equity, equal issued share capital plus all reserves." },
      { q: "Issued capital 600,000 naira, share premium 50,000 naira, general reserve 100,000 naira, retained profit 300,000 naira. Shareholders' funds are what?", options: ["950,000 naira", "1,050,000 naira", "650,000 naira", "750,000 naira"], answer: 1, explanation: "600,000 + 50,000 + 100,000 + 300,000 = 1,050,000 naira." },
      { q: "Tax unpaid at the year end is shown as what?", options: ["A fixed asset", "A current liability", "A reserve", "An expense"], answer: 1, explanation: "Tax payable is an amount owed within a year, so it is a current liability." },
      { q: "A proposed final dividend that has been declared is shown as what?", options: ["A fixed asset", "A current liability", "Share capital", "Other income"], answer: 1, explanation: "A declared dividend is an amount owed to shareholders, shown as a current liability." },
      { q: "Which of these is a revenue reserve?", options: ["Share premium", "Revaluation reserve", "General reserve", "Capital redemption reserve"], answer: 2, explanation: "The general reserve comes from trading profits, so it is a revenue reserve." },
      { q: "Who approves a final dividend?", options: ["The auditors only", "Shareholders at the annual general meeting", "The bank", "The tax authority"], answer: 1, explanation: "A final dividend is proposed by directors and approved by shareholders at the annual general meeting." },
      { q: "If a company makes a loss, what dividend does it normally pay?", options: ["A full dividend", "No dividend", "A preference dividend only", "An interim dividend"], answer: 1, explanation: "Dividends are paid from distributable profits, so a loss-making company normally pays no dividend." },
      { q: "Published company accounts must give what?", options: ["A rough estimate", "A true and fair view", "Only the profit figure", "Only the tax figure"], answer: 1, explanation: "Published accounts must give a true and fair view of the company's state of affairs." },
      { q: "Retained profit is best described as what?", options: ["Profit paid out as dividends", "Accumulated profit kept in the business", "Share premium", "A bank loan"], answer: 1, explanation: "Retained profit is accumulated profit not paid as dividend or transferred to other reserves." }
    ],
    status: "published"
  },
  {
    id: "accounting-09",
    subjectId: "accounting",
    topic: "Control Accounts and Bank Reconciliation",
    subtopic: "Sales ledger and purchases ledger control accounts",
    title: "Control Accounts: Sales and Purchases Ledgers",
    order: 9,
    introduction: "Control accounts summarise the totals in the sales and purchases ledgers and help to find errors. This lesson explains how to prepare both control accounts and what their balances prove.",
    objectives: ["Explain the purpose of control accounts", "Prepare a sales ledger control account", "Prepare a purchases ledger control account", "Use control accounts to locate errors", "Explain set-off and contra entries"],
    sections: [
      {
        heading: "Purpose of Control Accounts",
        body: "A control account is a summary account in the general ledger that records the totals of the transactions in a subsidiary ledger, such as the sales ledger, which holds the individual accounts of debtors, or the purchases ledger, which holds the individual accounts of creditors. At the end of a period, the balance on the control account should agree with the total of the balances in the subsidiary ledger. If they agree, it is good evidence that the postings are correct; if they disagree, an error has been made in one of the ledgers. Control accounts also help to prevent fraud, because one person can maintain the control account while another maintains the individual accounts, and they make it possible to prepare a trial balance quickly from the control balances without listing every debtor and creditor. The sales ledger control account is also called the debtors control account, and the purchases ledger control account is also called the creditors control account."
      },
      {
        heading: "Sales Ledger Control Account",
        body: "The sales ledger control account, or debtors control account, starts with the opening debit balance of debtors. Credit sales are debited, because debtors have increased, and returns inwards, cash received from debtors, discounts allowed, bad debts written off and set-offs are credited, because they reduce what debtors owe. The closing balance is a debit balance, representing the total owed by debtors at the period end. For example, opening debtors 300,000 naira, credit sales 1,200,000 naira, returns inwards 40,000 naira, cash received 900,000 naira, discount allowed 30,000 naira and bad debts 20,000 naira give a closing balance of 300,000 + 1,200,000 - 40,000 - 900,000 - 30,000 - 20,000 = 510,000 naira debit. A credit balance on the debtors control account would mean a debtor has paid in advance or has been over-credited, and it is shown separately. Discounts allowed are an expense to the business, given to customers for prompt payment."
      },
      {
        heading: "Purchases Ledger Control Account",
        body: "The purchases ledger control account, or creditors control account, is the mirror image of the debtors control. It starts with the opening credit balance of creditors. Credit purchases are credited, because creditors have increased, and returns outwards, cash paid to creditors, discounts received and set-offs are debited, because they reduce what is owed to suppliers. The closing balance is a credit balance, representing the total owed to creditors. For example, opening creditors 250,000 naira, credit purchases 800,000 naira, returns outwards 30,000 naira, cash paid 600,000 naira and discount received 20,000 naira give a closing balance of 250,000 + 800,000 - 30,000 - 600,000 - 20,000 = 400,000 naira credit. Discounts received are income to the business, earned by paying suppliers promptly. A debit balance on the creditors control account would mean a supplier has been overpaid or goods have been paid for in advance."
      },
      {
        heading: "Set-Off, Contra Entries and Locating Errors",
        body: "A set-off, also called a contra entry, arises when a business both buys from and sells to the same person, so the amount owed and the amount owing are offset against each other. If a customer owes the business 50,000 naira and the business owes that same person 30,000 naira as a supplier, a contra entry of 30,000 naira reduces both balances: it is credited to the debtors control account and debited to the creditors control account, leaving the customer owing 20,000 naira. When a control account disagrees with the subsidiary ledger, the difference is investigated item by item: check for an invoice entered in the wrong ledger, a payment posted to the wrong personal account, a discount omitted, a return not recorded, or a balance carried forward wrongly. Control accounts do not disclose errors of principle or errors where the same wrong amount is entered in both the control and the personal accounts."
      }
    ],
    definitions: [
      { term: "Control account", meaning: "A summary account in the general ledger recording the totals of a subsidiary ledger." },
      { term: "Sales ledger control account", meaning: "The debtors control account, summarising amounts owed by customers." },
      { term: "Purchases ledger control account", meaning: "The creditors control account, summarising amounts owed to suppliers." },
      { term: "Discount allowed", meaning: "A reduction given to a customer for prompt payment; an expense." },
      { term: "Discount received", meaning: "A reduction received from a supplier for prompt payment; income." },
      { term: "Set-off", meaning: "Offsetting an amount owed by a person against an amount owed to the same person; a contra entry." }
    ],
    formulas: ["Closing debtors = Opening debtors + Credit sales - Returns inwards - Cash received - Discount allowed - Bad debts - Set-off.", "Closing creditors = Opening creditors + Credit purchases - Returns outwards - Cash paid - Discount received - Set-off.", "Control balance should equal the total of the subsidiary ledger balances.", "Bad debts written off reduce debtors and are charged to the profit and loss account."],
    examples: [
      {
        title: "Sales ledger control account",
        problem: "Opening debtors 300,000 naira, credit sales 1,200,000 naira, returns inwards 40,000 naira, cash received 900,000 naira, discount allowed 30,000 naira, bad debts 20,000 naira. Calculate closing debtors.",
        steps: ["Start with opening debtors: 300,000 naira.", "Add credit sales: 300,000 + 1,200,000 = 1,500,000 naira.", "Deduct returns inwards: 1,500,000 - 40,000 = 1,460,000 naira.", "Deduct cash received: 1,460,000 - 900,000 = 560,000 naira.", "Deduct discount allowed and bad debts: 560,000 - 30,000 - 20,000 = 510,000 naira."],
        answer: "Closing debtors are 510,000 naira debit."
      },
      {
        title: "Purchases ledger control account",
        problem: "Opening creditors 250,000 naira, credit purchases 800,000 naira, returns outwards 30,000 naira, cash paid 600,000 naira, discount received 20,000 naira. Calculate closing creditors.",
        steps: ["Start with opening creditors: 250,000 naira.", "Add credit purchases: 250,000 + 800,000 = 1,050,000 naira.", "Deduct returns outwards: 1,050,000 - 30,000 = 1,020,000 naira.", "Deduct cash paid: 1,020,000 - 600,000 = 420,000 naira.", "Deduct discount received: 420,000 - 20,000 = 400,000 naira."],
        answer: "Closing creditors are 400,000 naira credit."
      },
      {
        title: "Contra entry",
        problem: "A customer owes the business 50,000 naira. The business owes the same person 30,000 naira as a supplier. Show the effect of a set-off.",
        steps: ["The contra amount is the smaller of the two balances: 30,000 naira.", "Credit the debtors control account with 30,000 naira, reducing debtors to 20,000 naira.", "Debit the creditors control account with 30,000 naira, reducing creditors to nil.", "The customer now owes 20,000 naira and the business owes nothing to them.", "Both control accounts fall by the same 30,000 naira."],
        answer: "After set-off, the customer owes 20,000 naira and the amount owed to them is nil."
      }
    ],
    tips: ["Debtors control is a debit balance; creditors control is a credit balance.", "Credit sales go on the debit side of the debtors control; credit purchases go on the credit side of the creditors control.", "Discount allowed reduces debtors; discount received reduces creditors.", "A contra entry reduces both control accounts by the same amount."],
    mistakes: ["Putting credit sales on the credit side of the debtors control account.", "Forgetting bad debts and discounts when calculating closing debtors.", "Treating discount received as an expense; it is income.", "Forgetting that cash sales and cash purchases do not go through control accounts."],
    facts: ["A control account balance should agree with the total of its subsidiary ledger.", "Control accounts help to detect errors and prevent fraud.", "Cash sales do not affect the debtors control account.", "A set-off is also called a contra entry."],
    quiz: [
      { q: "What is the main purpose of a control account?", options: ["To calculate profit", "To check the total of a subsidiary ledger", "To record cash sales", "To value stock"], answer: 1, explanation: "A control account summarises a subsidiary ledger, and its balance should agree with the ledger total." },
      { q: "The sales ledger control account is also called what?", options: ["Creditors control", "Debtors control", "Bank control", "Stock control"], answer: 1, explanation: "The sales ledger holds debtors, so its control account is the debtors control account." },
      { q: "Opening debtors 300,000 naira, credit sales 1,200,000 naira, returns inwards 40,000 naira, cash received 900,000 naira, discount allowed 30,000 naira, bad debts 20,000 naira. Closing debtors are what?", options: ["510,000 naira", "560,000 naira", "1,500,000 naira", "470,000 naira"], answer: 0, explanation: "300,000 + 1,200,000 - 40,000 - 900,000 - 30,000 - 20,000 = 510,000 naira." },
      { q: "Credit sales are recorded on which side of the debtors control account?", options: ["Credit side", "Debit side", "Neither side", "Both sides"], answer: 1, explanation: "Credit sales increase debtors, an asset, so they are debited in the debtors control account." },
      { q: "Opening creditors 250,000 naira, credit purchases 800,000 naira, returns outwards 30,000 naira, cash paid 600,000 naira, discount received 20,000 naira. Closing creditors are what?", options: ["350,000 naira", "400,000 naira", "420,000 naira", "450,000 naira"], answer: 1, explanation: "250,000 + 800,000 - 30,000 - 600,000 - 20,000 = 400,000 naira credit." },
      { q: "Discount allowed is best described as what?", options: ["Income", "An expense", "A liability", "A fixed asset"], answer: 1, explanation: "Discount allowed is given to customers for prompt payment and is an expense." },
      { q: "Discount received is best described as what?", options: ["An expense", "Income", "A current asset", "A drawing"], answer: 1, explanation: "Discount received from suppliers for prompt payment is income." },
      { q: "A set-off arises when what happens?", options: ["A customer pays cash", "A business buys from and sells to the same person", "A debt is written off", "Stock is returned"], answer: 1, explanation: "A set-off offsets what a person owes against what is owed to them when they are both a customer and a supplier." },
      { q: "A customer owes 50,000 naira and the business owes them 30,000 naira. After a set-off, the customer owes what?", options: ["80,000 naira", "50,000 naira", "20,000 naira", "30,000 naira"], answer: 2, explanation: "50,000 - 30,000 = 20,000 naira remains owing after the contra entry." },
      { q: "Which of these does NOT go through the debtors control account?", options: ["Credit sales", "Cash sales", "Returns inwards", "Bad debts"], answer: 1, explanation: "Cash sales are paid at once and create no debtor, so they do not go through the control account." },
      { q: "The closing balance of the creditors control account is normally what?", options: ["A debit balance", "A credit balance", "Nil", "Equal to debtors"], answer: 1, explanation: "Creditors are liabilities, so the creditors control account normally has a credit balance." },
      { q: "Bad debts written off are recorded in the debtors control account as what?", options: ["A debit", "A credit", "No entry", "A balance brought down"], answer: 1, explanation: "Bad debts reduce what debtors owe, so they are credited in the debtors control account." },
      { q: "If a control account disagrees with its subsidiary ledger, what does it show?", options: ["Profit is wrong", "An error has been made", "The business is insolvent", "Stock is wrong"], answer: 1, explanation: "Disagreement between a control account and its ledger shows an error in one of them." },
      { q: "Returns outwards are recorded in the creditors control account as what?", options: ["A credit", "A debit", "No entry", "An asset"], answer: 1, explanation: "Returns outwards reduce what is owed to suppliers, so they are debited in the creditors control account." },
      { q: "Control accounts help to prevent fraud mainly because of what?", options: ["They are kept secret", "Different people can keep the control and the personal accounts", "They replace the trial balance", "They are audited daily"], answer: 1, explanation: "Separating the control account from the individual accounts makes it harder for one person to hide an error or a fraud." }
    ],
    status: "published"
  },
  {
    id: "accounting-10",
    subjectId: "accounting",
    topic: "Control Accounts and Bank Reconciliation",
    subtopic: "Bank reconciliation statement",
    title: "Bank Reconciliation Statement",
    order: 10,
    introduction: "The cash book and the bank statement rarely agree. This lesson explains why, and how to prepare a bank reconciliation statement that brings them into agreement.",
    objectives: ["Explain why the cash book and bank statement differ", "Identify unpresented cheques, uncredited cheques and bank charges", "Update the cash book for bank items", "Prepare a bank reconciliation statement", "Calculate the correct bank balance"],
    sections: [
      {
        heading: "Why the Cash Book and Bank Statement Differ",
        body: "The cash book is the business's own record of its bank account, kept in the ledger, while the bank statement is the bank's record of the same account. They show the same transactions from opposite sides: a deposit is a debit in the cash book and a credit on the bank statement. They rarely agree at a given date because of timing differences and items that one side knows about before the other. Cheques issued but not yet presented to the bank have been credited in the cash book but have not yet been debited by the bank. Cheques paid in but not yet credited, also called uncredited cheques, have been debited in the cash book but have not yet been credited by the bank. The bank may also have charged fees, paid standing orders or direct debits, or received direct credits, which the business has not yet recorded. Errors on either side can also cause a difference."
      },
      {
        heading: "Updating the Cash Book",
        body: "Before preparing a bank reconciliation statement, the cash book must first be updated for items that appear on the bank statement but not in the cash book. Bank charges, interest charged on an overdraft, standing orders and direct debits paid by the bank are credited in the cash book, because they reduce the bank balance. Interest received, direct credits and amounts collected by the bank on the business's behalf are debited in the cash book, because they increase the bank balance. A cheque that has been dishonoured, for example because the customer had insufficient funds, is credited in the cash book to reverse the original receipt. Errors in the cash book, such as a cheque entered with the wrong amount, are also corrected at this stage. Unpresented cheques and uncredited cheques are not entered in the cash book, because they are timing differences that will clear on their own."
      },
      {
        heading: "Preparing the Bank Reconciliation Statement",
        body: "The bank reconciliation statement starts with the updated balance in the cash book and adjusts it for timing differences to arrive at the balance on the bank statement, or it may start with the bank statement balance and adjust back to the cash book. If starting with a debit balance in the cash book, add unpresented cheques, because the bank has not yet deducted them, and deduct uncredited cheques, because the bank has not yet added them. For example, an updated cash book balance of 450,000 naira debit, plus unpresented cheques of 120,000 naira, less uncredited cheques of 80,000 naira, gives a bank statement balance of 490,000 naira. If the cash book has a credit balance, an overdraft, the adjustments are reversed: deduct unpresented cheques and add uncredited cheques. The reconciliation must agree exactly, and any remaining difference points to an error that must be found."
      },
      {
        heading: "Bank Overdraft and Common Traps",
        body: "A bank overdraft is a negative bank balance, shown as a credit balance in the cash book and as a debit balance on the bank statement, and it is a current liability in the balance sheet. When reconciling an overdraft, remember that unpresented cheques increase the overdraft on the bank statement, because the bank will deduct them, and uncredited cheques reduce it, because the bank will add them. A common examination trap is to start from the wrong balance, for example using the un-updated cash book balance, or to add unpresented cheques when they should be deducted. Another trap is to confuse a cheque issued with a cheque received: cheques issued become unpresented cheques, while cheques received and paid in become uncredited cheques. Always update the cash book first, then reconcile, and always label the balance clearly as debit or credit, or as favourable or overdrawn."
      }
    ],
    definitions: [
      { term: "Bank reconciliation statement", meaning: "A statement reconciling the cash book balance with the bank statement balance." },
      { term: "Unpresented cheque", meaning: "A cheque issued by the business but not yet presented to the bank for payment." },
      { term: "Uncredited cheque", meaning: "A cheque paid into the bank but not yet credited by the bank." },
      { term: "Bank overdraft", meaning: "A negative bank balance, where the business owes the bank money." },
      { term: "Dishonoured cheque", meaning: "A cheque the bank refuses to pay, usually because the drawer has insufficient funds." },
      { term: "Standing order", meaning: "An instruction to a bank to pay a fixed amount regularly." }
    ],
    formulas: ["Bank statement balance = Updated cash book balance + Unpresented cheques - Uncredited cheques.", "For an overdraft: Bank statement overdraft = Cash book overdraft + Unpresented cheques - Uncredited cheques, with signs reversed from the debit case.", "Updated cash book balance = Original balance + Bank credits - Bank debits.", "Unpresented cheques reduce the cash book balance but not yet the bank balance."],
    examples: [
      {
        title: "Reconciling a debit balance",
        problem: "Updated cash book balance 450,000 naira debit, unpresented cheques 120,000 naira, uncredited cheques 80,000 naira. What is the bank statement balance?",
        steps: ["Start with the updated cash book balance: 450,000 naira debit.", "Add unpresented cheques, not yet deducted by the bank: 450,000 + 120,000 = 570,000 naira.", "Deduct uncredited cheques, not yet added by the bank: 570,000 - 80,000 = 490,000 naira.", "The result is the balance on the bank statement.", "Check the logic: the bank has more than the cash book because it has not yet paid the cheques issued."],
        answer: "The bank statement balance is 490,000 naira."
      },
      {
        title: "Updating the cash book",
        problem: "Cash book balance 300,000 naira debit. The bank statement shows bank charges 5,000 naira, a standing order 20,000 naira and interest received 8,000 naira, none yet in the cash book. What is the updated balance?",
        steps: ["Bank charges reduce the balance: 300,000 - 5,000 = 295,000 naira.", "The standing order reduces the balance: 295,000 - 20,000 = 275,000 naira.", "Interest received increases the balance: 275,000 + 8,000 = 283,000 naira.", "The updated cash book balance is 283,000 naira debit.", "This updated balance is the starting point for the reconciliation."],
        answer: "The updated cash book balance is 283,000 naira debit."
      },
      {
        title: "Reconciling an overdraft",
        problem: "Cash book overdraft is 100,000 naira, unpresented cheques are 60,000 naira and uncredited cheques are 40,000 naira. What is the bank statement balance?",
        steps: ["A cash book overdraft is a credit balance of 100,000 naira.", "Unpresented cheques will increase the overdraft when the bank pays them, so add 60,000 naira: overdraft 160,000 naira.", "Uncredited cheques will reduce the overdraft when credited, so deduct 40,000 naira: overdraft 120,000 naira.", "The bank statement shows an overdraft of 120,000 naira.", "In the balance sheet, the overdraft is a current liability."],
        answer: "The bank statement shows an overdraft of 120,000 naira."
      }
    ],
    tips: ["Always update the cash book before preparing the reconciliation statement.", "Unpresented cheques are added to a debit cash book balance; uncredited cheques are deducted.", "Bank charges and standing orders are credited in the cash book; interest received is debited.", "Label the balance clearly: debit or favourable, credit or overdrawn."],
    mistakes: ["Preparing the reconciliation from the un-updated cash book balance.", "Adding uncredited cheques instead of deducting them.", "Entering unpresented cheques in the cash book; they are timing differences only.", "Confusing cheques issued with cheques received."],
    facts: ["The cash book and bank statement show the same account from opposite sides.", "A dishonoured cheque is credited back in the cash book.", "A bank overdraft is a current liability.", "Unpresented cheques will clear when the payee presents them to the bank."],
    quiz: [
      { q: "Why do the cash book and bank statement often differ?", options: ["They record different accounts", "Timing differences and bank items not yet recorded", "They use different currencies", "One is always wrong"], answer: 1, explanation: "Timing differences, such as unpresented and uncredited cheques, and bank items not yet recorded cause the difference." },
      { q: "An unpresented cheque is what?", options: ["A cheque paid in but not yet credited", "A cheque issued but not yet presented to the bank", "A dishonoured cheque", "A bank charge"], answer: 1, explanation: "An unpresented cheque has been issued and credited in the cash book, but the bank has not yet paid it." },
      { q: "Updated cash book balance 450,000 naira debit, unpresented cheques 120,000 naira, uncredited cheques 80,000 naira. Bank statement balance is what?", options: ["410,000 naira", "490,000 naira", "570,000 naira", "530,000 naira"], answer: 1, explanation: "450,000 + 120,000 - 80,000 = 490,000 naira." },
      { q: "Bank charges are recorded in the updated cash book as what?", options: ["A debit", "A credit", "No entry", "An asset"], answer: 1, explanation: "Bank charges reduce the bank balance, so they are credited in the cash book." },
      { q: "Cash book balance 300,000 naira debit, bank charges 5,000 naira, standing order 20,000 naira, interest received 8,000 naira. Updated balance is what?", options: ["283,000 naira", "317,000 naira", "275,000 naira", "295,000 naira"], answer: 0, explanation: "300,000 - 5,000 - 20,000 + 8,000 = 283,000 naira debit." },
      { q: "An uncredited cheque is what?", options: ["A cheque issued but not presented", "A cheque paid in but not yet credited by the bank", "A cheque that bounced", "A bank charge"], answer: 1, explanation: "An uncredited cheque has been debited in the cash book but the bank has not yet added it." },
      { q: "A dishonoured cheque is treated in the cash book as what?", options: ["A debit", "A credit to reverse the receipt", "No entry", "A bank charge"], answer: 1, explanation: "A dishonoured cheque is credited in the cash book to reverse the original receipt." },
      { q: "A bank overdraft in the cash book is what kind of balance?", options: ["A debit balance", "A credit balance", "Nil", "A fixed asset"], answer: 1, explanation: "An overdraft is a negative bank balance, shown as a credit balance in the cash book." },
      { q: "Cash book overdraft 100,000 naira, unpresented cheques 60,000 naira, uncredited cheques 40,000 naira. Bank statement overdraft is what?", options: ["80,000 naira", "100,000 naira", "120,000 naira", "200,000 naira"], answer: 2, explanation: "100,000 + 60,000 - 40,000 = 120,000 naira overdraft on the bank statement." },
      { q: "Which item is NOT entered in the cash book when updating it?", options: ["Bank charges", "Unpresented cheques", "Standing order", "Interest received"], answer: 1, explanation: "Unpresented cheques are timing differences and are not entered in the cash book." },
      { q: "Interest received from the bank is recorded in the cash book as what?", options: ["A credit", "A debit", "No entry", "A liability"], answer: 1, explanation: "Interest received increases the bank balance, so it is debited in the cash book." },
      { q: "A standing order paid by the bank is what?", options: ["A regular payment made by the bank on instruction", "A cheque received", "A deposit", "A bank error"], answer: 0, explanation: "A standing order is an instruction to the bank to pay a fixed amount regularly." },
      { q: "In the balance sheet, a bank overdraft is shown as what?", options: ["A current asset", "A fixed asset", "A current liability", "Capital"], answer: 2, explanation: "An overdraft is an amount owed to the bank, repayable on demand, so it is a current liability." },
      { q: "What is the first step in preparing a bank reconciliation?", options: ["List unpresented cheques", "Update the cash book", "Write to the bank", "Prepare the trial balance"], answer: 1, explanation: "The cash book is first updated for bank charges, standing orders, direct credits and errors." },
      { q: "If the reconciliation still does not agree after adjustments, what does it show?", options: ["The bank is wrong", "An error remains to be found", "The business is insolvent", "The overdraft is too large"], answer: 1, explanation: "A remaining difference means an error on one side has not yet been found and corrected." }
    ],
    status: "published"
  },
  {
    id: "accounting-11",
    subjectId: "accounting",
    topic: "Manufacturing Accounts",
    subtopic: "Prime cost and cost of production",
    title: "Manufacturing Account: Prime Cost and Production Cost",
    order: 11,
    introduction: "A manufacturer makes goods instead of buying them ready-made. This lesson explains the manufacturing account, prime cost, factory overheads and the cost of production.",
    objectives: ["Explain the purpose of the manufacturing account", "Calculate prime cost from direct materials, direct labour and direct expenses", "Add factory overheads to find production cost", "Adjust for work in progress", "Distinguish direct and indirect costs"],
    sections: [
      {
        heading: "Purpose of the Manufacturing Account",
        body: "A manufacturing business buys raw materials, converts them into finished goods in a factory, and then sells the finished goods. Its final accounts therefore need an extra statement, the manufacturing account, prepared before the trading account. The manufacturing account calculates the cost of producing the finished goods during the period, called the cost of production, and that cost is transferred to the trading account in place of purchases. The trading account then works as for a trading business: sales less cost of goods sold gives gross profit, where cost of goods sold is based on the cost of production plus opening stock of finished goods, less closing stock of finished goods. The manufacturing account therefore links the factory to the shop."
      },
      {
        heading: "Prime Cost",
        body: "Prime cost is the total of the direct costs of production: direct materials, direct labour and direct expenses. Direct materials are the raw materials that become part of the finished product, such as wood in furniture or cloth in garments. Direct materials consumed are calculated as opening stock of raw materials plus purchases of raw materials, less returns outwards and less closing stock of raw materials, plus carriage inwards on raw materials. Direct labour is the wages of workers directly engaged in making the product, such as machine operators. Direct expenses are other costs directly traceable to production, such as royalties or the hire of a special machine. For example, direct materials consumed 400,000 naira plus direct labour 300,000 naira plus direct expenses 50,000 naira gives a prime cost of 750,000 naira."
      },
      {
        heading: "Factory Overheads and Production Cost",
        body: "Factory overheads, also called indirect manufacturing costs, are the costs of running the factory that cannot be traced directly to a single product: indirect materials such as lubricants, indirect labour such as a factory supervisor's salary, factory rent and rates, factory insurance, factory lighting and power, depreciation of factory plant and machinery, and factory repairs. Adding factory overheads to prime cost gives the total manufacturing cost, also called the production cost before adjusting for work in progress. For example, prime cost 750,000 naira plus factory overheads 250,000 naira gives a production cost of 1,000,000 naira, before the work in progress adjustment. Administrative expenses, selling and distribution expenses, and finance costs are not factory overheads: they are charged in the profit and loss account, not in the manufacturing account."
      },
      {
        heading: "Work in Progress",
        body: "Work in progress is partly finished goods in the factory at the period end: they have used some materials and labour but are not yet complete. The cost of production is adjusted for work in progress: add opening work in progress, which was started last period and is finished this period, and deduct closing work in progress, which is started but not finished. For example, total manufacturing cost 1,000,000 naira plus opening work in progress 80,000 naira less closing work in progress 120,000 naira gives cost of production of 960,000 naira. That 960,000 naira is the cost of the finished goods made during the period, and it is transferred to the trading account. Work in progress, raw materials stock and finished goods stock are all shown as current assets in the balance sheet."
      }
    ],
    definitions: [
      { term: "Manufacturing account", meaning: "The account calculating the cost of producing finished goods in a period." },
      { term: "Prime cost", meaning: "Direct materials consumed plus direct labour plus direct expenses." },
      { term: "Direct materials", meaning: "Raw materials that become part of the finished product." },
      { term: "Factory overheads", meaning: "Indirect manufacturing costs, such as factory rent, indirect labour and depreciation of plant." },
      { term: "Work in progress", meaning: "Partly finished goods in the factory at the period end." },
      { term: "Cost of production", meaning: "Prime cost plus factory overheads, adjusted for work in progress." }
    ],
    formulas: ["Direct materials consumed = Opening stock of raw materials + Purchases - Returns - Closing stock of raw materials.", "Prime cost = Direct materials consumed + Direct labour + Direct expenses.", "Production cost = Prime cost + Factory overheads + Opening work in progress - Closing work in progress.", "Cost of goods sold = Cost of production + Opening stock of finished goods - Closing stock of finished goods."],
    examples: [
      {
        title: "Calculating prime cost",
        problem: "Direct materials consumed 400,000 naira, direct labour 300,000 naira, direct expenses 50,000 naira. Calculate prime cost.",
        steps: ["Prime cost = Direct materials + Direct labour + Direct expenses.", "Insert the figures: 400,000 + 300,000 + 50,000.", "400,000 + 300,000 = 700,000 naira.", "700,000 + 50,000 = 750,000 naira.", "Prime cost is 750,000 naira."],
        answer: "Prime cost is 750,000 naira."
      },
      {
        title: "Direct materials consumed",
        problem: "Opening stock of raw materials 60,000 naira, purchases 380,000 naira, returns outwards 20,000 naira, closing stock of raw materials 40,000 naira. Calculate direct materials consumed.",
        steps: ["Start with opening stock: 60,000 naira.", "Add purchases: 60,000 + 380,000 = 440,000 naira.", "Deduct returns outwards: 440,000 - 20,000 = 420,000 naira.", "Deduct closing stock: 420,000 - 40,000 = 380,000 naira.", "Direct materials consumed are 380,000 naira."],
        answer: "Direct materials consumed are 380,000 naira."
      },
      {
        title: "Cost of production",
        problem: "Prime cost 750,000 naira, factory overheads 250,000 naira, opening work in progress 80,000 naira, closing work in progress 120,000 naira. Calculate cost of production.",
        steps: ["Add factory overheads to prime cost: 750,000 + 250,000 = 1,000,000 naira.", "Add opening work in progress: 1,000,000 + 80,000 = 1,080,000 naira.", "Deduct closing work in progress: 1,080,000 - 120,000 = 960,000 naira.", "This is the cost of the finished goods produced.", "Transfer 960,000 naira to the trading account."],
        answer: "Cost of production is 960,000 naira."
      }
    ],
    tips: ["Prime cost is direct costs only; factory overheads are added after prime cost.", "Administrative and selling expenses never go in the manufacturing account.", "Add opening work in progress and deduct closing work in progress.", "Direct materials consumed uses opening and closing stocks of raw materials."],
    mistakes: ["Including office salaries or advertising in factory overheads.", "Deducting opening work in progress instead of adding it.", "Using purchases of raw materials instead of materials consumed.", "Forgetting carriage inwards on raw materials in materials consumed."],
    facts: ["The manufacturing account is prepared before the trading account.", "Cost of production is transferred to the trading account in place of purchases.", "Raw materials, work in progress and finished goods are all current assets.", "Depreciation of factory plant is a factory overhead; depreciation of office equipment is an administration expense."],
    quiz: [
      { q: "What is the purpose of the manufacturing account?", options: ["To calculate net profit", "To calculate the cost of producing finished goods", "To calculate sales", "To value debtors"], answer: 1, explanation: "The manufacturing account calculates the cost of production, the cost of the finished goods made in the period." },
      { q: "Prime cost is made up of what?", options: ["Direct materials, direct labour and direct expenses", "Factory rent, insurance and depreciation", "Selling and administration expenses", "Opening and closing stock only"], answer: 0, explanation: "Prime cost = direct materials consumed + direct labour + direct expenses." },
      { q: "Direct materials consumed 400,000 naira, direct labour 300,000 naira, direct expenses 50,000 naira. Prime cost is what?", options: ["700,000 naira", "750,000 naira", "650,000 naira", "800,000 naira"], answer: 1, explanation: "400,000 + 300,000 + 50,000 = 750,000 naira." },
      { q: "Opening raw materials 60,000 naira, purchases 380,000 naira, returns 20,000 naira, closing raw materials 40,000 naira. Materials consumed are what?", options: ["420,000 naira", "380,000 naira", "400,000 naira", "360,000 naira"], answer: 1, explanation: "60,000 + 380,000 - 20,000 - 40,000 = 380,000 naira." },
      { q: "Which of these is a factory overhead?", options: ["Office salaries", "Advertising", "Factory rent", "Sales commission"], answer: 2, explanation: "Factory rent is an indirect cost of running the factory, so it is a factory overhead." },
      { q: "Prime cost 750,000 naira, factory overheads 250,000 naira, opening work in progress 80,000 naira, closing work in progress 120,000 naira. Cost of production is what?", options: ["1,000,000 naira", "960,000 naira", "1,040,000 naira", "920,000 naira"], answer: 1, explanation: "750,000 + 250,000 + 80,000 - 120,000 = 960,000 naira." },
      { q: "Work in progress is best described as what?", options: ["Finished goods ready for sale", "Partly finished goods in the factory", "Raw materials not yet used", "Goods returned by customers"], answer: 1, explanation: "Work in progress is goods that are partly finished at the period end." },
      { q: "Cost of production is transferred to which account?", options: ["Profit and loss account", "Trading account", "Balance sheet only", "Capital account"], answer: 1, explanation: "Cost of production goes to the trading account in place of purchases." },
      { q: "Depreciation of factory plant is treated as what?", options: ["An administration expense", "A factory overhead", "A selling expense", "A direct material"], answer: 1, explanation: "Depreciation of factory plant is an indirect manufacturing cost, a factory overhead." },
      { q: "Which of these is a direct labour cost?", options: ["Factory supervisor's salary", "Machine operator's wages", "Office manager's salary", "Salesman's commission"], answer: 1, explanation: "A machine operator works directly on making the product, so their wages are direct labour." },
      { q: "In the manufacturing account, opening work in progress is what?", options: ["Deducted", "Added", "Ignored", "Shown as a liability"], answer: 1, explanation: "Opening work in progress is added, because it was started last period and finished this period." },
      { q: "Which stock is deducted to find direct materials consumed?", options: ["Closing stock of finished goods", "Closing stock of raw materials", "Opening stock of finished goods", "Work in progress"], answer: 1, explanation: "Closing stock of raw materials is deducted, because those materials have not been used." },
      { q: "Selling and distribution expenses are charged where?", options: ["Manufacturing account", "Trading account", "Profit and loss account", "Capital account"], answer: 2, explanation: "Selling and distribution expenses are not production costs, so they are charged in the profit and loss account." },
      { q: "Raw materials, work in progress and finished goods are shown in the balance sheet as what?", options: ["Fixed assets", "Current assets", "Current liabilities", "Capital"], answer: 1, explanation: "All three stocks are expected to be used or sold within a year, so they are current assets." },
      { q: "If factory overheads rise and prime cost is unchanged, what happens to cost of production?", options: ["It falls", "It stays the same", "It rises", "It becomes prime cost"], answer: 2, explanation: "Cost of production = prime cost + factory overheads, so higher overheads raise the cost of production." }
    ],
    status: "published"
  },
  {
    id: "accounting-12",
    subjectId: "accounting",
    topic: "Manufacturing Accounts",
    subtopic: "Final accounts of a manufacturer and stock valuation",
    title: "Final Accounts of a Manufacturer and Stock Valuation",
    order: 12,
    introduction: "Once the cost of production is known, the manufacturer prepares trading and profit and loss accounts like any trader. This lesson completes those accounts and explains how stocks are valued.",
    objectives: ["Prepare the trading account of a manufacturer", "Calculate gross profit for a manufacturer", "Prepare the profit and loss account of a manufacturer", "Value raw materials, work in progress and finished goods", "Explain FIFO, LIFO and weighted average stock valuation"],
    sections: [
      {
        heading: "Trading Account of a Manufacturer",
        body: "The trading account of a manufacturer starts with sales less returns inwards to give net sales, just as for a trader. The cost of goods sold is then calculated as cost of production plus opening stock of finished goods, less closing stock of finished goods. For example, cost of production 960,000 naira plus opening finished goods 150,000 naira less closing finished goods 210,000 naira gives cost of goods sold of 900,000 naira. If net sales are 1,400,000 naira, gross profit is 1,400,000 - 900,000 = 500,000 naira. The cost of production is the manufacturer's equivalent of purchases: it is what it cost to make the goods sold, plus the finished goods carried in from last period. Finished goods are valued at cost of production, not at selling price, in the trading account and in the balance sheet."
      },
      {
        heading: "Profit and Loss Account of a Manufacturer",
        body: "After gross profit, the profit and loss account of a manufacturer deducts the expenses that were not included in the manufacturing account: administration expenses, such as office salaries, office rent and office insurance; selling and distribution expenses, such as advertising, salesmen's salaries and carriage outwards; and finance costs, such as interest on a loan and debenture interest. Other income, such as discount received, rent received and commission received, is added. The balance is the net profit or net loss for the period. A common examination trap is to deduct an expense twice: once in the manufacturing account and again in the profit and loss account. Each expense belongs in one place only: factory expenses in the manufacturing account, and office, selling and finance expenses in the profit and loss account. Depreciation must be split between factory plant, in the manufacturing account, and office equipment, in the profit and loss account, when the information is given."
      },
      {
        heading: "Valuation of Stocks",
        body: "Stocks are valued at the lower of cost and net realisable value, following the prudence concept. Raw materials are valued at cost, work in progress at the cost of the materials, labour and overheads used so far, and finished goods at the cost of production. When prices change during the period, the business must choose a method to value the stock issued and the stock remaining. Under FIFO, first in, first out, the oldest stock is treated as used first, so closing stock is valued at the latest prices. Under LIFO, last in, first out, the newest stock is treated as used first, so closing stock is valued at the oldest prices. Under the weighted average method, issues and closing stock are valued at the average price of all the stock available. In a period of rising prices, FIFO gives the highest closing stock value and the lowest cost of goods sold, while LIFO gives the lowest closing stock and the highest cost of goods sold."
      },
      {
        heading: "Worked Stock Valuation",
        body: "Consider a business that buys 100 units at 10 naira each and then 100 units at 12 naira each, and sells 100 units. Under FIFO, the 100 units sold are the oldest, at 10 naira, so cost of goods sold is 1,000 naira and closing stock is the 100 units at 12 naira, worth 1,200 naira. Under LIFO, the 100 units sold are the newest, at 12 naira, so cost of goods sold is 1,200 naira and closing stock is the 100 units at 10 naira, worth 1,000 naira. Under weighted average, the average price is 2,200 naira divided by 200 units, which is 11 naira, so cost of goods sold is 1,100 naira and closing stock is 1,100 naira. The choice of method therefore affects both gross profit and the stock value in the balance sheet, even though the physical goods are the same. In Nigeria, FIFO and weighted average are the commonly used methods, and JAMB usually tests the arithmetic with small, clear figures."
      }
    ],
    definitions: [
      { term: "Finished goods", meaning: "Goods completed in the factory and ready for sale." },
      { term: "FIFO", meaning: "First in, first out: the oldest stock is treated as used or sold first." },
      { term: "LIFO", meaning: "Last in, first out: the newest stock is treated as used or sold first." },
      { term: "Weighted average", meaning: "A stock valuation method using the average price of all stock available." },
      { term: "Net realisable value", meaning: "The expected selling price of stock less the cost of completing and selling it." },
      { term: "Cost of goods sold", meaning: "For a manufacturer: cost of production plus opening finished goods, less closing finished goods." }
    ],
    formulas: ["Cost of goods sold = Cost of production + Opening finished goods - Closing finished goods.", "Gross profit = Net sales - Cost of goods sold.", "FIFO: closing stock valued at latest prices; LIFO: closing stock valued at earliest prices.", "Weighted average price = Total cost of stock available / Total units available.", "Stocks valued at the lower of cost and net realisable value."],
    examples: [
      {
        title: "Manufacturer's gross profit",
        problem: "Cost of production 960,000 naira, opening finished goods 150,000 naira, closing finished goods 210,000 naira, net sales 1,400,000 naira. Calculate gross profit.",
        steps: ["Cost of goods sold = 960,000 + 150,000 - 210,000.", "960,000 + 150,000 = 1,110,000 naira.", "1,110,000 - 210,000 = 900,000 naira cost of goods sold.", "Gross profit = Net sales - Cost of goods sold = 1,400,000 - 900,000.", "Gross profit = 500,000 naira."],
        answer: "Gross profit is 500,000 naira."
      },
      {
        title: "FIFO stock valuation",
        problem: "A business buys 100 units at 10 naira each and then 100 units at 12 naira each, and sells 100 units. Calculate cost of goods sold and closing stock under FIFO.",
        steps: ["Under FIFO, the units sold are the oldest: 100 units at 10 naira.", "Cost of goods sold = 100 x 10 = 1,000 naira.", "Closing stock is the newest units: 100 units at 12 naira.", "Closing stock = 100 x 12 = 1,200 naira.", "Check: total cost 2,200 naira = 1,000 + 1,200."],
        answer: "Cost of goods sold 1,000 naira; closing stock 1,200 naira."
      },
      {
        title: "Weighted average stock valuation",
        problem: "Using the same figures, 100 units at 10 naira and 100 units at 12 naira, 100 units sold, calculate cost of goods sold and closing stock under weighted average.",
        steps: ["Total cost = 1,000 + 1,200 = 2,200 naira for 200 units.", "Average price = 2,200 / 200 = 11 naira per unit.", "Cost of goods sold = 100 x 11 = 1,100 naira.", "Closing stock = 100 x 11 = 1,100 naira.", "Check: 1,100 + 1,100 = 2,200 naira, the total cost."],
        answer: "Cost of goods sold 1,100 naira; closing stock 1,100 naira."
      }
    ],
    tips: ["Cost of goods sold for a manufacturer uses cost of production, not purchases.", "Finished goods are valued at cost of production, never at selling price.", "In rising prices, FIFO gives the highest closing stock and LIFO the lowest.", "Split depreciation between factory and office when the question gives the split."],
    mistakes: ["Adding purchases to cost of production in the trading account.", "Valuing finished goods at selling price.", "Putting selling expenses in the manufacturing account.", "Using LIFO closing stock values when the question asks for FIFO."],
    facts: ["Stocks are valued at the lower of cost and net realisable value.", "FIFO treats the oldest stock as sold first.", "Weighted average smooths price changes into one average price.", "A manufacturer has three stocks: raw materials, work in progress and finished goods."],
    quiz: [
      { q: "Cost of production 960,000 naira, opening finished goods 150,000 naira, closing finished goods 210,000 naira. Cost of goods sold is what?", options: ["900,000 naira", "1,110,000 naira", "1,320,000 naira", "750,000 naira"], answer: 0, explanation: "Cost of goods sold = 960,000 + 150,000 - 210,000 = 900,000 naira." },
      { q: "Net sales 1,400,000 naira and cost of goods sold 900,000 naira. Gross profit is what?", options: ["500,000 naira", "2,300,000 naira", "900,000 naira", "400,000 naira"], answer: 0, explanation: "Gross profit = 1,400,000 - 900,000 = 500,000 naira." },
      { q: "Finished goods in the balance sheet are valued at what?", options: ["Selling price", "Cost of production", "Net realisable value only", "Prime cost only"], answer: 1, explanation: "Finished goods are valued at the cost of production, subject to the lower of cost and net realisable value rule." },
      { q: "Under FIFO, which stock is treated as sold first?", options: ["The newest stock", "The oldest stock", "The cheapest stock", "The most expensive stock"], answer: 1, explanation: "FIFO means first in, first out, so the oldest stock is treated as sold first." },
      { q: "100 units at 10 naira, then 100 units at 12 naira, 100 units sold. Under FIFO, closing stock is what?", options: ["1,000 naira", "1,100 naira", "1,200 naira", "2,200 naira"], answer: 2, explanation: "Under FIFO the newest 100 units remain, at 12 naira each, worth 1,200 naira." },
      { q: "Under LIFO, with the same figures, cost of goods sold is what?", options: ["1,000 naira", "1,100 naira", "1,200 naira", "2,200 naira"], answer: 2, explanation: "Under LIFO the newest units are sold first, 100 x 12 = 1,200 naira." },
      { q: "Under weighted average, with the same figures, the average price is what?", options: ["10 naira", "11 naira", "12 naira", "22 naira"], answer: 1, explanation: "Total cost 2,200 naira divided by 200 units is 11 naira per unit." },
      { q: "Stocks are valued at what?", options: ["Cost only", "Selling price", "The lower of cost and net realisable value", "The higher of cost and net realisable value"], answer: 2, explanation: "Stocks are valued at the lower of cost and net realisable value, following prudence." },
      { q: "In a period of rising prices, which method gives the highest closing stock?", options: ["LIFO", "FIFO", "Weighted average", "They are all equal"], answer: 1, explanation: "Under FIFO, closing stock is valued at the latest, higher prices." },
      { q: "Office salaries of a manufacturer are charged where?", options: ["Manufacturing account", "Trading account", "Profit and loss account", "Capital account"], answer: 2, explanation: "Office salaries are administration expenses, charged in the profit and loss account." },
      { q: "Carriage outwards for a manufacturer is charged where?", options: ["Manufacturing account", "Trading account", "Profit and loss account", "Balance sheet"], answer: 2, explanation: "Carriage outwards is a selling expense, charged in the profit and loss account." },
      { q: "A manufacturer has how many types of stock?", options: ["One", "Two", "Three", "Four"], answer: 2, explanation: "A manufacturer holds raw materials, work in progress and finished goods." },
      { q: "Depreciation of office equipment is charged where?", options: ["Manufacturing account", "Profit and loss account", "Trading account", "Capital account"], answer: 1, explanation: "Depreciation of office equipment is an administration expense in the profit and loss account." },
      { q: "Under weighted average, 100 units sold at 11 naira average price give cost of goods sold of what?", options: ["1,000 naira", "1,100 naira", "1,200 naira", "2,200 naira"], answer: 1, explanation: "100 x 11 = 1,100 naira." },
      { q: "Work in progress is valued at what?", options: ["Selling price", "Cost of materials, labour and overheads used so far", "Prime cost only", "Nil"], answer: 1, explanation: "Work in progress is valued at the cost incurred on it so far: materials, labour and overheads." }
    ],
    status: "published"
  },
  {
    id: "accounting-13",
    subjectId: "accounting",
    topic: "Accounting Principles and Concepts",
    subtopic: "Concepts, conventions and the regulatory framework",
    title: "Accounting Principles, Concepts and Conventions",
    order: 13,
    introduction: "Accounting is built on agreed principles that make accounts consistent and comparable. This lesson explains the main concepts and conventions, and the bodies that set accounting standards in Nigeria.",
    objectives: ["Explain the main accounting concepts", "Apply the accruals, prudence and going concern concepts", "Distinguish concepts from conventions", "Explain materiality, consistency and the business entity concept", "Describe the role of accounting standards and regulatory bodies in Nigeria"],
    sections: [
      {
        heading: "What Accounting Concepts Are",
        body: "Accounting concepts are the basic assumptions and rules that guide how transactions are recorded and how accounts are prepared, so that accounts are consistent from year to year and comparable between businesses. The main concepts are the business entity concept, the going concern concept, the accruals or matching concept, the prudence concept, the consistency concept, the historical cost concept, the money measurement concept, the realisation concept and the materiality concept. These concepts are part of the conceptual framework for financial reporting, which also sets out the qualities that make financial information useful: relevance, faithful representation, comparability, verifiability, timeliness and understandability. JAMB often tests the concepts by giving a situation and asking which concept it illustrates, so learn each concept with a clear example."
      },
      {
        heading: "Entity, Going Concern and Accruals",
        body: "The business entity concept states that the business is separate from its owner, so the owner's personal transactions are not recorded in the business books; drawings are therefore shown as a reduction of capital, not as a business expense. The going concern concept assumes that the business will continue in operation for the foreseeable future, so assets are valued on the basis that they will be used in the business, not sold off in a forced sale. The accruals concept, also called the matching concept, states that income and expenses are recorded in the period in which they are earned or incurred, not when cash is received or paid; this is why accruals and prepayments are adjusted at the year end, and why depreciation spreads the cost of a fixed asset over its useful life. Together these three concepts are the foundation of the double entry system and of the final accounts."
      },
      {
        heading: "Prudence, Consistency and Realisation",
        body: "The prudence concept states that profit and assets should not be overstated and losses and liabilities should not be understated; in practice, this means providing for expected losses, such as a provision for doubtful debts, and valuing closing stock at the lower of cost and net realisable value. Prudence does not mean creating secret reserves or deliberately understating profit. The consistency concept states that a business should use the same accounting methods from year to year, for example the same depreciation method, so that results are comparable; a change is allowed only if it gives a better presentation, and it must be disclosed. The realisation concept states that profit is recognised only when it is realised, normally when goods are sold and the customer is legally bound to pay, not when goods are merely produced or an order is received. The historical cost concept states that assets are recorded at their original cost, not at their current market value, unless a revaluation is made."
      },
      {
        heading: "Materiality, Money Measurement and Standards",
        body: "The materiality concept states that only items that are material, meaning large enough to affect a user's decision, need to be shown separately or treated strictly; small items, such as low-value tools, may be written off as expenses even though they last more than a year. The money measurement concept states that only transactions that can be measured in money are recorded in the accounts, so the skill of the workforce or the reputation of the business is not shown as an asset. Accounting standards, such as the International Financial Reporting Standards, IFRS, set out how transactions should be treated, and in Nigeria the Financial Reporting Council of Nigeria, FRCN, adopts and enforces standards, while the Institute of Chartered Accountants of Nigeria, ICAN, and the Association of National Accountants of Nigeria, ANAN, are the professional bodies for accountants. The Companies and Allied Matters Act also sets out the legal requirements for company accounts."
      }
    ],
    definitions: [
      { term: "Business entity concept", meaning: "The business is separate from its owner; personal transactions are not business transactions." },
      { term: "Going concern concept", meaning: "The business is assumed to continue in operation for the foreseeable future." },
      { term: "Accruals concept", meaning: "Income and expenses are recorded in the period earned or incurred, not when cash moves." },
      { term: "Prudence concept", meaning: "Do not overstate profit or assets, and do not understate losses or liabilities." },
      { term: "Consistency concept", meaning: "The same accounting methods are used from year to year so results are comparable." },
      { term: "Materiality concept", meaning: "Only items large enough to affect a decision need separate or strict treatment." }
    ],
    formulas: ["Closing stock valued at the lower of cost and net realisable value follows prudence.", "Accruals and prepayments follow the matching concept.", "Depreciation spreads cost over useful life, following accruals.", "Financial information should be relevant, faithfully represented, comparable, verifiable, timely and understandable."],
    examples: [
      {
        title: "Identifying the entity concept",
        problem: "The owner of a business pays his children's school fees from the business bank account. How should this be treated?",
        steps: ["Recall the business entity concept: the business is separate from the owner.", "The school fees are a personal expense, not a business expense.", "Record the payment as drawings, reducing capital.", "Do not charge it to the profit and loss account.", "The balance sheet shows capital reduced by the amount."],
        answer: "It is drawings, a reduction of capital, not a business expense."
      },
      {
        title: "Identifying the prudence concept",
        problem: "Closing stock cost 200,000 naira but its net realisable value is 180,000 naira. At what value should it be shown?",
        steps: ["Recall prudence: do not overstate assets.", "Compare cost, 200,000 naira, with net realisable value, 180,000 naira.", "Take the lower figure, 180,000 naira.", "The fall of 20,000 naira is a loss recognised in this period.", "This follows the rule: stock at the lower of cost and net realisable value."],
        answer: "Closing stock is shown at 180,000 naira."
      },
      {
        title: "Identifying the accruals concept",
        problem: "Rent of 120,000 naira was paid for a year, but only 100,000 naira relates to this year and 20,000 naira to next year. How much rent is charged this year?",
        steps: ["Recall the accruals concept: charge the expense to the period it relates to.", "Only 100,000 naira relates to this year.", "Charge 100,000 naira to the profit and loss account.", "Show the 20,000 naira as a prepayment, a current asset.", "Cash paid is not the same as the expense for the period."],
        answer: "Rent charged this year is 100,000 naira; 20,000 naira is a prepayment."
      }
    ],
    tips: ["Learn each concept with one clear example, because JAMB tests them through situations.", "Prudence explains stock at the lower of cost and net realisable value and the provision for doubtful debts.", "Accruals explains accruals, prepayments and depreciation.", "Entity explains why drawings are not an expense."],
    mistakes: ["Saying prudence means deliberately understating profit; it means not overstating it.", "Confusing consistency with accruals; consistency is about using the same method each year.", "Treating the owner's personal spending as a business expense.", "Saying profit is recognised when goods are produced; it is recognised when sold."],
    facts: ["The business entity concept separates the business from its owner.", "Going concern assumes the business will continue operating.", "IFRS are the International Financial Reporting Standards.", "In Nigeria, the Financial Reporting Council of Nigeria adopts and enforces accounting standards."],
    quiz: [
      { q: "Which concept states that the business is separate from its owner?", options: ["Going concern", "Business entity", "Prudence", "Consistency"], answer: 1, explanation: "The business entity concept treats the business as separate from its owner." },
      { q: "The owner pays personal school fees from the business bank account. How is it treated?", options: ["A business expense", "Drawings", "Sales", "A liability"], answer: 1, explanation: "Personal spending by the owner is drawings, reducing capital, not a business expense." },
      { q: "Which concept assumes the business will continue operating?", options: ["Prudence", "Going concern", "Materiality", "Realisation"], answer: 1, explanation: "Going concern assumes the business will continue for the foreseeable future." },
      { q: "Closing stock cost 200,000 naira, net realisable value 180,000 naira. At what value is it shown?", options: ["200,000 naira", "180,000 naira", "190,000 naira", "380,000 naira"], answer: 1, explanation: "Prudence requires stock at the lower of cost and net realisable value, so 180,000 naira." },
      { q: "Which concept requires income and expenses to be recorded in the period earned or incurred?", options: ["Historical cost", "Accruals", "Money measurement", "Consistency"], answer: 1, explanation: "The accruals, or matching, concept records income and expenses when earned or incurred, not when cash moves." },
      { q: "Rent paid 120,000 naira, but only 100,000 naira relates to this year. How much is charged this year?", options: ["120,000 naira", "100,000 naira", "20,000 naira", "220,000 naira"], answer: 1, explanation: "Under accruals, only the 100,000 naira relating to this year is charged; 20,000 naira is a prepayment." },
      { q: "Which concept states that the same methods should be used from year to year?", options: ["Prudence", "Consistency", "Realisation", "Materiality"], answer: 1, explanation: "Consistency requires the same accounting methods each year so results are comparable." },
      { q: "Profit is recognised when goods are sold, not when they are produced. Which concept is this?", options: ["Realisation", "Going concern", "Prudence", "Entity"], answer: 0, explanation: "The realisation concept recognises profit only when it is realised, normally on sale." },
      { q: "Which concept means only money-measurable transactions are recorded?", options: ["Money measurement", "Prudence", "Accruals", "Consistency"], answer: 0, explanation: "Money measurement records only transactions that can be measured in money." },
      { q: "A low-value tool is written off as an expense even though it lasts a year. Which concept allows this?", options: ["Prudence", "Materiality", "Going concern", "Historical cost"], answer: 1, explanation: "Materiality allows small, immaterial items to be treated simply as expenses." },
      { q: "Assets are recorded at their original cost. Which concept is this?", options: ["Historical cost", "Prudence", "Realisation", "Accruals"], answer: 0, explanation: "The historical cost concept records assets at their original cost." },
      { q: "Which body adopts and enforces accounting standards in Nigeria?", options: ["The Central Bank only", "The Financial Reporting Council of Nigeria", "The Stock Exchange only", "The Ministry of Trade"], answer: 1, explanation: "The Financial Reporting Council of Nigeria adopts and enforces accounting standards in Nigeria." },
      { q: "Which of these is a professional body for accountants in Nigeria?", options: ["ICAN", "NEMA", "NIMASA", "NAPTIP"], answer: 0, explanation: "ICAN, the Institute of Chartered Accountants of Nigeria, is a professional accountancy body." },
      { q: "Providing for doubtful debts follows which concept?", options: ["Consistency", "Prudence", "Realisation", "Entity"], answer: 1, explanation: "Providing for expected losses follows prudence: do not overstate assets or profit." },
      { q: "Useful financial information should be relevant and what else?", options: ["Secret", "Faithfully represented", "Unchanged", "Estimated only"], answer: 1, explanation: "Useful information is relevant and faithfully represented, as well as comparable, verifiable, timely and understandable." }
    ],
    status: "published"
  },
  {
    id: "accounting-14",
    subjectId: "accounting",
    topic: "Accounting Principles and Concepts",
    subtopic: "Source documents, books of original entry and ethics",
    title: "Source Documents, Books of Original Entry and Ethics",
    order: 14,
    introduction: "Every accounting entry starts with a document. This lesson explains source documents, the books of original entry, the cash book and petty cash, and the ethical duties of an accountant.",
    objectives: ["Identify the main source documents and their uses", "Explain the books of original entry", "Prepare a two-column and three-column cash book", "Prepare a petty cash book using the imprest system", "Explain the ethical duties of accountants"],
    sections: [
      {
        heading: "Source Documents",
        body: "A source document is the original evidence that a transaction took place, and every entry in the books must be supported by one. An invoice is sent by a seller to a buyer when goods are sold on credit, showing the goods, quantities, prices and total. A receipt is given when cash is received, acknowledging payment. A credit note is issued when goods are returned or an invoice is overcharged, reducing the amount owed. A debit note is sent by a buyer to a seller when goods are returned. A cheque is an instruction to a bank to pay a stated amount, and a bank statement is the bank's record of the account. A delivery note accompanies goods sent to a customer, and a purchase order is the buyer's request to a supplier. Keeping source documents is essential for audit, for settling disputes, and for proving transactions to the tax authority."
      },
      {
        heading: "Books of Original Entry",
        body: "Books of original entry, also called books of prime entry, are where transactions are first recorded before they are posted to the ledger. The sales day book, or sales journal, records credit sales from invoices. The purchases day book records credit purchases. The returns inwards day book records goods returned by customers from credit notes, and the returns outwards day book records goods returned to suppliers. The cash book records cash and bank receipts and payments, and the petty cash book records small cash expenses. The general journal records transactions that do not belong in any other book of original entry, such as the correction of errors, the purchase of fixed assets on credit, opening entries and closing entries. Each day book is totalled periodically and the total is posted to the ledger, while the individual items are posted to the personal accounts."
      },
      {
        heading: "The Cash Book and Petty Cash",
        body: "The cash book is both a book of original entry and a ledger account. A two-column cash book has a cash column and a bank column on each side, recording receipts on the debit side and payments on the credit side. A three-column cash book adds a discount column on each side: discount allowed on the debit side, as an expense, and discount received on the credit side, as income. Contra entries in the cash book record money moved between cash and bank, such as cash paid into the bank or cash drawn from the bank for office use, and are marked with the letter C. The petty cash book records small expenses, such as postage, stationery and transport. Under the imprest system, the petty cashier is given a fixed float, for example 20,000 naira; at the end of the period the amount spent is reimbursed so the float is restored to 20,000 naira. For example, if 14,500 naira is spent, the reimbursement is 14,500 naira, restoring the float to 20,000 naira."
      },
      {
        heading: "Ethics and the Role of the Accountant",
        body: "An accountant must act with integrity, objectivity, professional competence and due care, confidentiality and professional behaviour, as set out in the code of ethics of ICAN and other professional bodies. Integrity means being honest and straightforward; objectivity means not allowing bias or pressure to affect judgement; confidentiality means not disclosing a client's information without consent; and professional behaviour means complying with laws and avoiding actions that discredit the profession. An accountant must not help a client to evade tax, falsify records, or present misleading accounts, and must report suspected fraud or illegal acts through the proper channels. The accountant's work supports owners, managers, lenders, investors, the government and the public, all of whom rely on accounts that are true and fair. Good ethics protect both the accountant and the users of the accounts."
      }
    ],
    definitions: [
      { term: "Source document", meaning: "The original evidence that a transaction took place, such as an invoice or receipt." },
      { term: "Invoice", meaning: "A document sent by a seller to a buyer for goods sold on credit." },
      { term: "Credit note", meaning: "A document issued when goods are returned or an invoice is overcharged, reducing the amount owed." },
      { term: "Book of original entry", meaning: "A book where transactions are first recorded before posting to the ledger." },
      { term: "Imprest system", meaning: "A petty cash system where a fixed float is restored by reimbursing the amount spent." },
      { term: "Contra entry", meaning: "An entry in the cash book recording money moved between cash and bank." }
    ],
    formulas: ["Petty cash reimbursement = Amount spent in the period, restoring the float.", "Cash book balance = Total receipts - Total payments in the cash or bank column.", "Discount allowed is recorded in the discount column on the debit side of the cash book.", "Discount received is recorded in the discount column on the credit side of the cash book."],
    examples: [
      {
        title: "Using source documents",
        problem: "A customer returns goods worth 15,000 naira that were sold on credit. Which document is issued and what is its effect?",
        steps: ["The seller issues a credit note to the customer.", "The credit note reduces the amount the customer owes by 15,000 naira.", "The returns inwards day book records the credit note.", "The customer's personal account is credited with 15,000 naira.", "Returns inwards are deducted from sales in the trading account."],
        answer: "A credit note is issued; the customer now owes 15,000 naira less."
      },
      {
        title: "Petty cash imprest system",
        problem: "A petty cash float is 20,000 naira. During the month, 14,500 naira is spent on postage, stationery and transport. How much is reimbursed and what is the float after reimbursement?",
        steps: ["The amount spent is 14,500 naira.", "The reimbursement equals the amount spent: 14,500 naira.", "Cash in hand before reimbursement is 20,000 - 14,500 = 5,500 naira.", "After reimbursement, cash in hand is 5,500 + 14,500 = 20,000 naira.", "The float is restored to 20,000 naira."],
        answer: "Reimbursement is 14,500 naira; the float is restored to 20,000 naira."
      },
      {
        title: "Three-column cash book discount",
        problem: "A debtor who owes 50,000 naira pays 48,000 naira in full settlement. How is this recorded in the three-column cash book?",
        steps: ["The debtor paid 48,000 naira cash, so debit the bank column with 48,000 naira.", "The discount allowed is 50,000 - 48,000 = 2,000 naira.", "Record 2,000 naira in the discount allowed column on the debit side.", "The debtor's personal account is credited with the full 50,000 naira.", "The discount of 2,000 naira is an expense in the profit and loss account."],
        answer: "Debit bank 48,000 naira and discount allowed 2,000 naira; credit the debtor 50,000 naira."
      }
    ],
    tips: ["An invoice supports a credit sale; a receipt supports a cash receipt; a credit note supports a return.", "The general journal is for transactions that fit no other book of original entry.", "In a three-column cash book, discount allowed is on the debit side and discount received on the credit side.", "Under the imprest system, reimbursement equals the amount spent."],
    mistakes: ["Recording a credit sale in the cash book instead of the sales day book.", "Putting discount received on the debit side of the cash book.", "Forgetting that a contra entry affects both the cash and bank columns.", "Treating a credit note as an invoice; a credit note reduces what is owed."],
    facts: ["Every ledger entry should be supported by a source document.", "The cash book is both a book of original entry and a ledger account.", "The imprest system keeps the petty cash float fixed.", "An accountant must act with integrity, objectivity and confidentiality."],
    quiz: [
      { q: "Which document is sent by a seller for goods sold on credit?", options: ["Receipt", "Invoice", "Credit note", "Cheque"], answer: 1, explanation: "An invoice is sent by the seller to the buyer for goods sold on credit." },
      { q: "A customer returns goods sold on credit. Which document is issued?", options: ["Invoice", "Receipt", "Credit note", "Purchase order"], answer: 2, explanation: "A credit note is issued when goods are returned, reducing the amount the customer owes." },
      { q: "Which book records credit sales first?", options: ["Purchases day book", "Sales day book", "Cash book", "General journal"], answer: 1, explanation: "Credit sales are first recorded in the sales day book, from invoices." },
      { q: "A petty cash float is 20,000 naira and 14,500 naira is spent. How much is reimbursed?", options: ["5,500 naira", "14,500 naira", "20,000 naira", "34,500 naira"], answer: 1, explanation: "Under the imprest system, the reimbursement equals the amount spent, 14,500 naira." },
      { q: "A debtor owes 50,000 naira and pays 48,000 naira in full settlement. What is the discount allowed?", options: ["48,000 naira", "50,000 naira", "2,000 naira", "98,000 naira"], answer: 2, explanation: "Discount allowed = 50,000 - 48,000 = 2,000 naira." },
      { q: "In a three-column cash book, discount allowed is recorded on which side?", options: ["Credit side", "Debit side", "Neither side", "Both sides"], answer: 1, explanation: "Discount allowed is recorded in the discount column on the debit side of the cash book." },
      { q: "Which book is used to correct an error in the ledger?", options: ["Sales day book", "Purchases day book", "General journal", "Petty cash book"], answer: 2, explanation: "Corrections of errors are recorded in the general journal." },
      { q: "A contra entry in the cash book records what?", options: ["A credit sale", "Money moved between cash and bank", "A bad debt", "A discount"], answer: 1, explanation: "A contra entry records cash paid into the bank or cash drawn from the bank." },
      { q: "Which of these is a source document?", options: ["Trial balance", "Bank statement", "Balance sheet", "Profit and loss account"], answer: 1, explanation: "A bank statement is original evidence from the bank; the others are statements prepared from the books." },
      { q: "Goods returned to a supplier are recorded first in which book?", options: ["Returns inwards day book", "Returns outwards day book", "Sales day book", "Cash book"], answer: 1, explanation: "Goods returned to suppliers are recorded in the returns outwards day book." },
      { q: "A receipt is given when what happens?", options: ["Goods are sold on credit", "Cash is received", "Goods are returned", "An invoice is overcharged"], answer: 1, explanation: "A receipt acknowledges that cash has been received." },
      { q: "Which ethical duty means an accountant must not disclose a client's information without consent?", options: ["Integrity", "Objectivity", "Confidentiality", "Competence"], answer: 2, explanation: "Confidentiality requires an accountant to keep a client's information private." },
      { q: "The cash book is best described as what?", options: ["Only a book of original entry", "Only a ledger account", "Both a book of original entry and a ledger account", "A source document"], answer: 2, explanation: "The cash book is where cash transactions are first recorded and it is also the ledger account for cash and bank." },
      { q: "A debit note is sent by whom?", options: ["The seller to the buyer", "The buyer to the seller when returning goods", "The bank to the business", "The auditor to the client"], answer: 1, explanation: "A debit note is sent by the buyer to the seller when goods are returned." },
      { q: "An accountant must not help a client to do what?", options: ["Keep proper records", "Evade tax", "Prepare a budget", "File a return on time"], answer: 1, explanation: "Helping a client to evade tax breaches integrity and professional behaviour." }
    ],
    status: "published"
  },
];
