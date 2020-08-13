import React from 'react';
import { render } from 'react-dom';
import { useQuery, gql } from '@apollo/client';

const SEARCH_RESULT= gql`
query searchquery ($search : String!){
  getCompanyInformation(search:$search){
    _id
    companyName
    quickDescription
    fulldescription
  }
  
  }

`

function searchResult ({ search }) {
  const {loading, error , data} = useQuery(SEARCH_RESULT,{variables : { search },});
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return( 
      <ul>
            {data.getCompanyInformation.map(queryResult => (
              <li key = {queryResult.id}> <h1>{queryResult.companyName}</h1>
              <br/>{queryResult.quickDescription}</li>
             ) )}
        </ul>)
       
    
}

export default searchResult