import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

type Bank = {
  id: number
  name: string
  bank_name: string
  type: string
  balance: number
};

type Transaction = {
  id: number
  description: string
  categories: string[]
  amount: number
};

type BankItemProps = {
  bank: Bank
};

type TransactionItemProps = {
  transaction: Transaction
};

const banks: Bank[] = [
  {
    id: 1,
    name: 'Cuenta de ahorros 6334',
    bank_name: 'Bancolombia',
    type: 'Debit',
    balance: 10000
  },
  {
    id: 2,
    name: 'Cuenta de ahorros 6335',
    bank_name: 'BBVA',
    type: 'Debit',
    balance: 10000
  },
  {
    id: 3,
    name: 'Tarjeta de crédito 6336',
    bank_name: 'NuBank',
    type: 'Credit',
    balance: 0
  }
];

const transactions: Transaction[] = [
  {
    id: 1,
    description: 'Compra en el D1',
    categories: ['market'],
    amount: 1000
  },
  {
    id: 2,
    description: 'Compra en el Exito',
    categories: ['market'],
    amount: 30200
  },
  {
    id: 3,
    description: 'Transferencia a nequi',
    categories: ['savings', 'nequi'],
    amount: 200000
  },
  {
    id: 4,
    description: 'Retiro de dinero para los buses',
    categories: ['transport', 'cash'],
    amount: 10000
  },
  {
    id: 5,
    description: 'Didi',
    categories: ['transport', 'didi'],
    amount: 17300
  },
  {
    id: 6,
    description: 'Didi',
    categories: ['transport', 'didi'],
    amount: 17300
  },
  {
    id: 7,
    description: 'Didi',
    categories: ['transport', 'didi'],
    amount: 17300
  },
  {
    id: 8,
    description: 'Didi',
    categories: ['transport', 'didi'],
    amount: 17300
  },
];

const BankItem = ({ bank }: BankItemProps) => {
  return (
    <View style={styles.bankItem}>
      <Text style={styles.itemTitle}>{bank.name}</Text>
      <Text style={styles.itemCaption}>{bank.type} - {bank.bank_name}</Text>
      <Text style={styles.itemBalance}>{bank.balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>
    </View>
  );
}

const TransactionItem = ({ transaction } : TransactionItemProps) => {
  return (
    <View style={styles.trsnsactionItem}>
      <Text style={styles.itemTitle}>{transaction.description}</Text>
      <Text style={styles.itemCaption}>{transaction.categories.join(', ')}</Text>
      <Text style={styles.itemBalance}>{transaction.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>
    </View>
  );
}

const ItemSeparator = () => <View style={{width: 12, height: 12 }} />

export default function App() {
  return (
    <View style={styles.body}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.appTitle}>Expenses app</Text>
        <View>
          <Text style={styles.listTitle}>Banks</Text>
          <FlatList
            horizontal={true}
            data={banks}
            renderItem={({ item }) => <BankItem bank={item} />}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={ItemSeparator}
            contentContainerStyle={styles.bankFlatList}
            endFillColor='#fff'
          />
        </View>
        <Text style={styles.listTitle}>Latest transactions</Text>
        <FlatList
          data={transactions}
          renderItem={({ item }) => <TransactionItem transaction={item} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={ItemSeparator}
          contentContainerStyle={styles.transactionFlatList}
          endFillColor='#fff'
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#262626',
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  appTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 12,
    marginLeft: 12,
    marginBottom: 24,
  },
  listTitle: {
    color:'#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 12,
    marginLeft: 12,
  },
  bankFlatList: {
    paddingHorizontal: 12,
    paddingBottom: 6,
  },
  bankItem: {
    backgroundColor: '#333',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  transactionFlatList: {
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  trsnsactionItem: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#666',
  },
  itemTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemCaption: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '200',
  },
  itemBalance: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 18,
    fontWeight: '500',
  },
});
