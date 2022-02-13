import React from 'react';
import SelectBox from './SelectBox';
import useAxiosFetch from '../../utils/useAxiosFetch';

const SortByOrder = ({templates, setTemplates}) => {
    const { data } = useAxiosFetch('https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates')
    const allTemps = data && data

    const options = [
        { option: 'Default' },
        { option: 'Ascending' },
        { option: 'Descending' },
    ]

    const onClick = (val) => {
        let sortedTemplates = []

        const defaultSort = val.option === "Default"
        const SortByAscendingOrder = val.option === "Ascending"
        const SortByDescendingOrder = val.option === "Descending"

        SortByAscendingOrder && sortedTemplates.push(...templates.sort((a, b) => ( a.name.localeCompare(b.name) )))
        SortByDescendingOrder && sortedTemplates.push(...templates.sort((a, b) => ( b.name.localeCompare(a.name) )))
        defaultSort && sortedTemplates.push(...allTemps)

        setTemplates(sortedTemplates)
        
    }

    return (
        <div>
            <SelectBox options={options} onClick={onClick} newSelected={'Default'} label={'Order'} />
        </div>
    );
};

export default SortByOrder;