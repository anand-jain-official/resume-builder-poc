import React from 'react';
import { Field } from 'redux-form';
import SkillsAutocomplete from '../common/SkillsAutocomplete';

const Skills = ({ fields }) => {
  return (
    <Field
      name={`skills`}
      type="text"
      component={SkillsAutocomplete}
      label="Skill"/>
  )
}

export default Skills;