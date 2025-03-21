'use client';

import React, { useEffect, useState } from 'react';
import { useData, generateLocations, generateCreativeProcess, SQLFilter } from '@/app/context/DataContext';
import Styles from '../app/styles/SearchBar.module.css'

type UserFilters = {
    year: string;
    creative_process: string;
    recorded_at: string;
    recording_type: string;
    personnel: string;
};


function SearchBar() {
    // Variables
    const { albums, personnel, setUserFilters, setFilter, filter, userFilters } = useData();
    const locations = generateLocations();
    const creativeProcess = generateCreativeProcess();
    const years = Array.from({ length: 2030 - 2012 + 1 }, (_, index) => 2012 + index);
    const recordingType = [ "Studio", "Live"];
    

    // Dropdown selectors
    const yearSelector = years.map((year, index) => <option key={index} value={year}>{year}</option>);
    const creativeSelector = creativeProcess.map((process: string, index: number) => <option key={index} value={process}>{process}</option>);
    const locationSelector = locations.map((location: string, index: number)=> <option key={index} value={location}>{location}</option> );
    const recordingTypeSelector = recordingType.map((type, index: number)=> <option key={index} value={type}>{type}</option>);
    const personnelSelector = personnel.map((person: string, index: number)=> <option key={index + 1} value={person.name}> {person.name}</option>);
    
    //Functions
    const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setFilter(true );
        SQLFilter(userFilters,personnel);
    };

    const handleRefresh=()=>{
            setUserFilters({
            year: "",
            creative_process: "",
            location: "",
            recording_type: "",
            personnel: "",
        });
       
    };

    // useEffect(() => {
    //     if (filter) {
           
    //     }
    // }, [filter]);

    const handleFilters=(event: React.ChangeEvent<HTMLSelectElement>)=>{
      const { name, value } = event.target;
      
      setUserFilters((prev)=> ({...prev, [name]: value}));
    };

//   useEffect(()=>{
//     console.log(userFilters)
//   },[userFilters]);

    return (
        <div className={Styles.searchBarContainer}>
          <form>

            <select key="year" name="year" value={userFilters.year} id="year" onChange={(event)=> handleFilters(event)}>
                <option value="" disabled>Year</option>
                {yearSelector}
            </select>

            <select key="creative process" name="creative_process" value={userFilters.creative_process} id="creative_process" onChange={(event)=> handleFilters(event)}>
                <option value="" disabled>Creative process</option>
                {creativeSelector}
            </select>

            <select key="location" name="location" value={userFilters.location} id="location" onChange={(event)=> handleFilters(event)}>
                <option value="" disabled>Location</option>
                {locationSelector}
            </select>

            <select key="recording type" name="recording_type" value={userFilters.recording_type} id="recording_type" onChange={(event)=> handleFilters(event)}>
                <option value="" disabled>Recording type</option>
                {recordingTypeSelector}
            </select>

            <select key="personnel" name="personnel" value={userFilters.personnel} id="personnel" onChange={(event)=> handleFilters(event)}>
                <option value="" disabled>Personnel</option>
                <option value="CORE" >CORE</option>
                {personnelSelector}
            </select>
            <button type="submit" onClick={handleSubmit}>Apply</button>
            <button type="button" onClick={handleRefresh}>Refresh</button>
            </form>
        </div>
    )
}

export default SearchBar;
