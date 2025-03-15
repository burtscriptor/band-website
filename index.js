const filters = [
    { Year: 2012 },
    {Emotion: "happy"},
    { Location: "Sydney"}
];

let dummyData = [
    { id: 1,
        Year: 2013,
        Emotion: "sad",
        Location: "Sydney"
    },
    { id: 2,
        Year: 2012,
        Emotion: "happy",
        Location: "Sydney"
    },
    { id: 3,
        Year: 2014,
        Emotion: "sad",
        Location: "Perth"
    },
    { id: 4,
        Year: 2011,
        Emotion: "happy",
        Location: "Darwin"
    }
];


function locations(){
    let potentialLocations = dummyData;

    const result = potentialLocations.reduce((acc, album)=>{
      
        if(!acc[album.Emotion]){
            acc.push(album.Emotion)
        }
        return acc;
    }, [])

    return result;
}

let test = locations();
console.log(test);

const filterFunction =( key, value, data )=>{
   return data.filter((element) => element[key] === value);
};

const loadFilters=()=>{
    let filterData = dummyData;

    for(let filter of filters){
        const key = Object.keys(filter)[0];
        const value = Object.values(filter)[0];

       filterData = filterFunction(key, value, filterData) 
    }

    return filterData
};

let result = loadFilters();
console.log(result);

// const yearArray = Array.from( {length: 2030 - 2012 + 1}, (_, index)=> 2012 + index );

// console.log(yearArray)

