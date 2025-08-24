'use client';

import React, { useEffect, useState } from 'react';
import { useData, generateCreativeProcess } from '@/app/context/DataContext';
import Styles from '../app/styles/SearchBar.module.css'

type UserFilters = {
    year: string;
    creative_process: string;
    recorded_at: string;
    recording_type: string;
};


function SearchBar({ filterFunction, albums, filteredAlbums }) {
    const [ year, setYear] = useState('');
    const  [ process, setProcess] = useState('');
    const [ type, setType] = useState('');
    // Variables
    const creativeProcess = generateCreativeProcess();
    const years = Array.from({ length: 2030 - 2012 + 1 }, (_, index) => 2012 + index);
    const recordingType = [ "Studio", "Live"];
    

    // Dropdown selectors
    const yearSelector = years.map((year, index) => <option key={index} value={year}>{year}</option>);
    const creativeSelector = creativeProcess.map((process: string, index: number) => <option key={index} value={process}>{process}</option>);
    const recordingTypeSelector = recordingType.map((type, index: number)=> <option key={index} value={type}>{type}</option>);
    
    

    useEffect(() => {
      filterFunction(year, process, type);
    }, [year, process, type]);

   
    //   const { name, value } = event.target;
      
    //   setUserFilters((prev)=> ({...prev, [name]: value}));
    // };


    return (
        <div className={Styles.searhBarWrapper}>
        <div className={Styles.searchBarContainer}>
            <select key="year" name="year" value={year} id="year" onChange={(e) => setYear(e.target.value)}>
                <option value="Clear" >Year</option>
                {yearSelector}
            </select>
            <select key="creative process" name="creative_process" value={process} id="creative_process" onChange={(e)=> setProcess(e.target.value)}>
                <option value="Clear" >Creative process</option>
                {creativeSelector}
            </select>
            <select key="recording type" name="recording_type" value={type} id="recording_type" onChange={(e)=> setType(e.target.value)}>
                <option value="Clear" >Recording type</option>
                {recordingTypeSelector}
            </select>

        </div>
        <div className={Styles.counter}>
                {filteredAlbums.length}/{albums.length}
            </div>
        </div>
    )
}

export default SearchBar;
