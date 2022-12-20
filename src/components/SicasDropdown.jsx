import React, { useState, useMemo } from 'react'
import {
  DropdownTypeahead,
  DropdownTypeaheadItem,
  Typography
} from '@ellucian/react-design-system/core'


function SicasDropdown() {
  const options = [
    { code: 'dev', label: 'Development' },
    { code: 'tech', label: 'Technology' }
  ]

  const [option, setOption] = useState(options[0]);

  const items = useMemo(() => {
    return options.map(data => {
      return (
        <DropdownTypeaheadItem key={data.code} value={data.code} label={data.label} />
      );
    });
  }, [options]);

  return (
    <div>
      <Typography>
        Dropdown Testing
      </Typography>
      <DropdownTypeahead
        id="ddta-test"
        onClick= {(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOption(event?.target.value)}}
        value={option}
      >
        {items}
      </DropdownTypeahead>
    </div>
  );
}

export default SicasDropdown
