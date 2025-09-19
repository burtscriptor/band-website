
'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useData, generateCreativeProcess } from '@/app/context/DataContext';
import Styles from '../app/styles/SearchBar.module.css';
import { SearchBarProps } from '@/types/types';

function SearchBar({ filterFunction, albums, filteredAlbums, setReverse, reverse }: SearchBarProps) {
  const [year, setYear] = useState('Clear');
  const [process, setProcess] = useState('Clear');
  const [type, setType] = useState('Clear');

  const creativeProcess = generateCreativeProcess();
  const years = Array.from({ length: 2030 - 2012 + 1 }, (_, i) => 2012 + i);
  const recordingType = ['Studio', 'Live'];

  const [openYear, setOpenYear] = useState(false);
  const [openProcess, setOpenProcess] = useState(false);
  const [openType, setOpenType] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    filterFunction(year, process, type);
  }, [year, process, type,]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpenYear(false);
        setOpenProcess(false);
        setOpenType(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={Styles.searhBarWrapper} ref={wrapperRef}>
      <div className={Styles.searchBarContainer}>
    
        <div
          className={`${Styles.customSelectWrapper} ${Styles.yearDropdown}`}
          onClick={() => setOpenYear(!openYear)}
        >
          <div className={`${Styles.customSelectBox}`}>
            {year === 'Clear' ? 'Year' : year}
            <span className={Styles.arrow}>{openYear ? '▲' : '▼'}</span>
          </div>
          {openYear && (
            <ul className={`${Styles.customSelectDropdown} ${Styles.yearDropdownWidth}`}>
              <li
                className={Styles.customSelectOption}
                onClick={() => { setYear('Clear'); setOpenYear(false); }}
              >
                Clear
              </li>
              {years.map((y) => (
                <li
                  key={y}
                  className={`${Styles.customSelectOption} ${y.toString() === year ? Styles.selected : ''}`}
                  onClick={() => { setYear(y.toString()); setOpenYear(false); }}
                >
                  {y}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          className={`${Styles.customSelectWrapper} ${Styles.processDropdown}`}
          onClick={() => setOpenProcess(!openProcess)}
        >
          <div className={Styles.customSelectBox}>
            {process === 'Clear' ? 'Creative Process' : process}
            <span className={Styles.arrow}>{openProcess ? '▲' : '▼'}</span>
          </div>
          {openProcess && (
            <ul className={`${Styles.customSelectDropdown} ${Styles.creativeProcessDropDown}`}>
              <li
                className={Styles.customSelectOption}
                onClick={() => { setProcess('Clear'); setOpenProcess(false); }}
              >
                Clear
              </li>
              {creativeProcess.map((p) => (
                <li
                  key={p}
                  className={`${Styles.customSelectOption} ${p === process ? Styles.selected : ''}`}
                  onClick={() => { setProcess(p); setOpenProcess(false); }}
                >
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          className={`${Styles.customSelectWrapper} ${Styles.typeDropdown}`}
          onClick={() => setOpenType(!openType)}
        >
          <div className={Styles.customSelectBox}>
            {type === 'Clear' ? 'Recording Environment' : type}
            <span className={Styles.arrow}>{openType ? '▲' : '▼'}</span>
          </div>
          {openType && (
            <ul className={Styles.customSelectDropdown}>
              <li
                className={Styles.customSelectOption}
                onClick={() => { setType('Clear'); setOpenType(false); }}
              >
                Clear
              </li>
              {recordingType.map((t) => (
                <li
                  key={t}
                  className={`${Styles.customSelectOption} ${t === type ? Styles.selected : ''}`}
                  onClick={() => { setType(t); setOpenType(false); }}
                >
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={Styles.counter}>
          {filteredAlbums.length}/{albums.length}
           <button className={Styles.reverseButton} type='button' onClick={() => setReverse(!reverse)}></button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
