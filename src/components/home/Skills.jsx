import React from 'react';
import { Field } from 'redux-form';
import SkillsAutocomplete from '../common/SkillsAutocomplete';

const Skills = ({ fields }) => {
  return (
    <div className = "position-relative">
      <Field
        name = {`skills`}
        type = "text"
        component = {SkillsAutocomplete}
        label = "Skill"
      />
    </div>
  )
}

export default Skills;