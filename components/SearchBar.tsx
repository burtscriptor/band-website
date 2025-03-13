'use client'

import React from 'react';
import { useData, generateLocations } from '@/app/context/DataContext';

// Data for dropdown menus
const years = Array.from({ length: 2030 - 2012 + 1 }, (_, index) => 2012 + index);
const creativeProcess = [
    "Composed", "Improvised", "Partial improvised",
    "Improvised with post production over dubs",
    "Partial improvised with post production over dubs",
];
const recordingType = [
    "Studio",
    "Live"
];


function SearchBar() {
    // Variables
    const { albums } = useData();
    const locations = generateLocations();
    console.log("locations", locations);



    // Dropdown selectors
    const yearSelector = years.map((year, index) => <option value={year}>{year}</option>);
    const creativeSelector = creativeProcess.map((process) => <option value={process}>{process}</option>);
    const locationSelector = locations.map((location)=> <option value={location}>{location}</option> );
    const recordingTypeSelector = recordingType.map((type)=> <option value={type}>{type}</option>);


    return (
        <div>
            <label for="year"></label>

            <select name="year" id="year" aria-placeholder='Year'>
                <option value="" disabled selected>Year</option>
                {yearSelector}
            </select>

            <select name="creative process" id="creative process" aria-placeholder='creative process'>
                <option value="" disabled selected>Creative process</option>
                {creativeSelector}
            </select>

            <select name="location" id="location" aria-placeholder='location'>
                <option value="" disabled selected>Recorded at</option>
                {locationSelector}
            </select>

            <select name="recording type" id="recording type" aria-placeholder='recording type'>
                <option value="" disabled selected>Recording type</option>
                {recordingTypeSelector}
            </select>

            <select name="personnel" id="personnel" aria-placeholder='personnel'>
                <option value="" disabled selected>Personnel</option>
                {recordingTypeSelector}
            </select>

        </div>
    )
}

export default SearchBar;

// Presentation
// should return all the nessary components of the filter ui
//
// Business
// Should return the updated list of albums for the discograph to
// render from 