import './App.css';
import { useState, useCallback, useLayoutEffect, useMemo } from "react";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from "@mui/material";

import HoverSquaresList from "./list/HoverSquaresList";
import SquareList from "./squareList/SquareList";

const App = () => {
  const [ fetchedData, setFetchedData ] = useState(null);
  const [ mockState, setMockState ] = useState('');
  const [ isStart, setIsStart ] = useState(false);
  const [ dataList, setDataList ] = useState({ list: [] });

  useLayoutEffect(() => {
      fetch('https://demo1030918.mockable.io/')
          .then(response => response.json())
          .then(data => setFetchedData(data))

  }, []);


  const coubArray = useMemo(
      () => Array.from({ length: mockState }, () => Math.floor(Math.random())),
      [ mockState ]
  );

  const pushToList = useCallback((rowIndex, columnIndex) => {
      const newObject =  {
          row: rowIndex,
          column: columnIndex,
      };

      setDataList(prevState => {
          return { list: [...prevState.list, newObject]};
      })
  }, [ setDataList ]);

  const correctClassName = useCallback(() => {
    if (+mockState === 5) {
        return 'wrapper5';
    }
    if (+mockState === 10) {
        return 'wrapper10';
    }
    if (+mockState === 15) {
        return 'wrapper15';
    }
  }, [ mockState ]);

  const changeSelect = (e) => {
      setMockState(e.target.value);
      setDataList({list: []});
  };

  const isButtonDisabled = +mockState === 0;

  if (!fetchedData) {
      return null;
  }

  const { easyMode, hardMode, normalMode } = fetchedData;

  return (
            <div className='App'>
                <div className='wrapperButtonsWithSelect'>
                    <div className='headerWrapper'>
                        <Box className='boxStyles'>
                            <FormControl fullWidth>
                                <InputLabel
                                    className='inputLabel'
                                    id='pick-mode'
                                >
                                    { 'Pick mode' }
                                </InputLabel>
                                <Select
                                    className={'selectStyles'}
                                    labelId='pick-mode'
                                    id='pick-mode'
                                    value={mockState}
                                    label='Pick mode'
                                    onChange={(e) => changeSelect(e)}
                                >
                                    <MenuItem value={easyMode.field}>{ 'easy' }</MenuItem>
                                    <MenuItem value={normalMode.field}>{ 'normal' }</MenuItem>
                                    <MenuItem value={hardMode.field}>{ 'hard' }</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Button
                            className='buttonStyle'
                            color={'primary'}
                            variant={'contained'}
                            disabled={isButtonDisabled}
                            onClick={() => setIsStart(true)}
                        >
                            { 'start' }
                        </Button>
                    </div>
                    {
                        isStart &&
                            <SquareList
                                coubArray={coubArray}
                                pushToList={pushToList}
                                wrapperClassName={correctClassName}
                            />
                    }
                </div>
                <HoverSquaresList list={dataList.list} />
            </div>
  );
}

export default App;
