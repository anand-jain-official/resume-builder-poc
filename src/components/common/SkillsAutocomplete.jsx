import React, { useRef } from "react";
import ReactTags from "react-tag-autocomplete";

const SkillsAutocomplete = ({ input: { value, onChange } }) => {
  const skillsTagsRef = useRef();
  const suggestions = [
    { id: 1, name: "Apples" },
    { id: 2, name: "Pears" },
    { id: 3, name: "Bananas" },
    { id: 4, name: "Mangos" },
    { id: 5, name: "Lemons" },
    { id: 6, name: "Apricots" }
  ];

  const onDelete = i => {
    const tags = [...value];
    tags.splice(i, 1);
    onChange(tags);
  };

  const onAddition = tag => {
    const newValue = Array.isArray(value) ? [...value, tag] : [tag]
    onChange(newValue);
  };

  return (
    <ReactTags
      ref = {skillsTagsRef}
      tags={Array.isArray(value) ? value : []}
      suggestions={suggestions}
      onDelete={onDelete}
      onAddition={onAddition}
      placeholderText = {""}
    />
  );
};

export default SkillsAutocomplete;