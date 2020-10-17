import React, { useState } from 'react';
import { connect } from 'react-redux';
import { format, subDays, parse } from 'date-fns';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function DateBar2(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  // const [newDate, setDate] = useState('Functional Component');
  //const newDate = format(new Date(), 'MMMM - dd - yyyy');
  const dayBefore = subDays(new Date(), 1);
  return (
    <div>
      <h2>{dayBefore}</h2>
      {/* <h2>{newDate}</h2> */}
      
    </div>
  );
}

export default connect(mapStoreToProps)(DateBar2);
