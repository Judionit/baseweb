// @flow
import React, {useState} from 'react';
import {DatePicker} from 'baseui/datepicker';
import {TimezonePicker} from 'baseui/timezonepicker';
import {FormControl} from 'baseui/form-control';

export default () => {
  const [date, setDate] = useState<any>(new Date());
  const [tz, setZone] = useState<any>({
    id: 'America/Fort_Nelson',
    label: 'MST - America/Fort Nelson (GMT -07:00)',
    offset: 420,
  });

  return (
    <React.Fragment>
      <FormControl label="Date">
        <DatePicker
          onChange={({date}) => {
            setDate(date);
          }}
          value={new Date(date.getTime() + tz.offset * 60000)}
        />
      </FormControl>
      <FormControl label="Timezone">
        <TimezonePicker date={date} onChange={setZone} />
      </FormControl>
    </React.Fragment>
  );
};
