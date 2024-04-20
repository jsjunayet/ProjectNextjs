"use client"
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";




const Demu = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div>
            <div className="card flex justify-content-center">
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search"> </InputIcon>
                    <InputText v-model="value1" placeholder="Search" />
                </IconField>
            </div>
        </div>
    );
};

export default Demu;

