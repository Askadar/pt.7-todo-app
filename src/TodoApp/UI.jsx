import React from 'react';

export const CheckMarkToggle = ({done}) =>
<span className={`ui-icon ui-checkmark ${done ? '' : 'faded'}`} />;

export const CheckMark = () =>
<span className="ui-icon ui-checkmark"/>;

export const Cross = () =>
<span className="ui-icon ui-cross"/>;

export const Circle = () =>
<span className="ui-icon ui-circle"/>;

export const Pencil = () =>
<span className={`ui-icon ui-pencil${false ? ' checked' : ''}`}>Edit [NO ICON]</span>;
