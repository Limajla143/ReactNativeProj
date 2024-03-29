import React, { useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
    const[term, setTerm] = useState('');
    const[searchApi, results, errorMessage] = useResult();

    const filterResultByPrice = (price) => {
        //price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };
    
    return (
        <>
            <SearchBar term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi()}></SearchBar>
            <Text>{errorMessage ?  errorMessage : null}</Text>
            <ScrollView>
            <ResultList results={filterResultByPrice('$')} title="Best Price"></ResultList>
            <ResultList results={filterResultByPrice('$$')} title="Bit Pricier"></ResultList>
            <ResultList results={filterResultByPrice('$$$')} title="Big Spender"></ResultList>
            </ScrollView>        
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;