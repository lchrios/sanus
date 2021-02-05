import React from 'react'
import {
    Icon,
    Slider,
    TextField,
    IconButton,
    InputAdornment,
    Hidden,
    Typography,
} from '@material-ui/core'

const TopBarList = ({
    viewMode,
    sliderValue,
    handleSldierChange,
    handleInputChange,
    handleViewChange,
}) => {
    let marks = [{ value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }]

    return (
        <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center">
                <TextField
                    label="Busca un paciente"
                    onChange={handleInputChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>search</Icon>
                            </InputAdornment>
                        ),
                    }}
                ></TextField>
            </div>

            <div className="flex items-center">
                <Hidden xsDown>
                <div className="flex">
                <Typography gutterBottom>Acercar o alejar vista</Typography>
                        <Slider
                            className="w-120 mr-4"
                            value={sliderValue}
                            min={25}
                            step={null}
                            marks={marks}
                            onChange={handleSldierChange}
                            aria-labelledby="continuous-slider"
                        ></Slider>
                </div>
                    <IconButton
                        color={viewMode === 'grid' ? 'primary' : 'default'}
                        onClick={() => handleViewChange('grid')}
                    >
                        <Icon>view_comfy</Icon>
                    </IconButton>

                    <IconButton
                        color={viewMode === 'list' ? 'primary' : 'default'}
                        onClick={() => handleViewChange('list')}
                    >
                        <Icon>list</Icon>
                    </IconButton>
                </Hidden>
            </div>
        </div>
    )
}

export default TopBarList
