import React from 'react';
import SelectBox from './SelectBox';
import useAxiosFetch from '../../utils/useAxiosFetch';

const Filter = ({ templates, setTemplates, setTextState }) => {
    const { data } = useAxiosFetch('https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates')
    const allTemps = data && data

    const options = [
        { option: 'All' },
        { option: 'Education' },
        { option: 'E-commerce' },
        { option: 'Health' }
    ]

    const onClick = (val) => {
        setTextState(val.option)
        let sortedTemplates = []

        const allCat = val.option === "All"
        const educationCat = val.option === "Education"
        const commerceCat = val.option === "E-commerce"
        const healthCat = val.option === "Health"

        educationCat && sortedTemplates.push(...templates.filter((template) => (template.category.includes('Education'))))
        commerceCat && sortedTemplates.push(...templates.filter((template) => (template.category.includes('E-commerce'))))
        healthCat && sortedTemplates.push(...templates.filter((template) => (template.category.includes('Health'))))
        allCat && sortedTemplates.push(...allTemps)

        setTemplates(sortedTemplates)

    }


    return (
        <div>
            <SelectBox options={options} onClick={onClick} newSelected={'All'} label={'Category'} />
        </div>
    );
};

export default Filter;
