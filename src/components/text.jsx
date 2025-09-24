import React, { useState, useRef, useEffect } from 'react';

// TailwindSelect — pixel-imitating select styled with Tailwind CSS
// Props:
//  - options: [{ value, label }]
//  - value: current value (controlled) optional
//  - defaultValue: initial value (uncontrolled) optional
//  - onChange: fn(value)
//  - className: additional wrapper classes

export default function Text({ options = [], value, defaultValue, onChange, className = '' }) {
  const isControlled = value !== undefined;
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue ?? (options[0] && options[0].value));
  const selected = isControlled ? value : internalValue;
  const label = options.find(o => o.value === selected)?.label ?? '';

  const rootRef = useRef(null);
  const listRef = useRef(null);
  const focusedIndex = useRef(-1);

  useEffect(() => {
    function onDoc(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  useEffect(() => {
    if (open) {
      // reset keyboard focus index to selected
      const idx = options.findIndex(o => o.value === selected);
      focusedIndex.current = idx >= 0 ? idx : 0;
      // ensure highlighted element is visible
      requestAnimationFrame(() => {
        const node = listRef.current?.children[focusedIndex.current];
        if (node) node.scrollIntoView({ block: 'nearest' });
      });
    }
  }, [open]);

  function changeValue(val) {
    if (!isControlled) setInternalValue(val);
    onChange?.(val);
    setOpen(false);
  }

  function onKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(v => !v); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); if (!open) { setOpen(true); } else { move(1); } return; }
    if (e.key === 'ArrowUp') { e.preventDefault(); if (!open) { setOpen(true); } else { move(-1); } return; }
    if (e.key === 'Escape') { setOpen(false); return; }
    if (e.key === 'Home') { e.preventDefault(); setFocus(0); return; }
    if (e.key === 'End') { e.preventDefault(); setFocus(options.length - 1); return; }
  }

  function move(delta) {
    if (options.length === 0) return;
    focusedIndex.current = Math.max(0, Math.min(options.length - 1, focusedIndex.current + delta));
    const node = listRef.current?.children[focusedIndex.current];
    if (node) node.scrollIntoView({ block: 'nearest' });
  }
  function setFocus(idx) {
    focusedIndex.current = idx;
    const node = listRef.current?.children[idx];
    if (node) node.scrollIntoView({ block: 'nearest' });
  }

  return (
    <div className={`inline-block ${className}`} ref={rootRef}>
      {/* Hidden native select for forms / accessibility */}
      <select
        aria-hidden="true"
        tabIndex={-1}
        value={selected}
        onChange={e => changeValue(e.target.value)}
        className="hidden"
      >
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        onKeyDown={onKeyDown}
        className={`
          flex items-center select-none h-8 px-3 rounded-full text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-200
          bg-gradient-to-b from-blue-300 to-blue-600 text-white shadow-md
        `}
      >
        <span className="mr-3">{label || ' '}</span>
        <span className="ml-auto w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm">
          {/* chevron icon */}
          <svg className={`w-3 h-3 transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 9.99 12 15.99 6 9.99z" fill="#1e6096" />
          </svg>
        </span>
      </button>

      {/* popup */}
      <div
        ref={listRef}
        role="listbox"
        tabIndex={-1}
        className={`mt-2 min-w-[160px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-auto max-h-56 ${open ? 'block' : 'hidden'}`}
        style={{ zIndex: 1000 }}
      >
        {options.map((opt, i) => (
          <div
            key={opt.value}
            role="option"
            aria-selected={opt.value === selected}
            onClick={() => changeValue(opt.value)}
            onMouseEnter={() => { focusedIndex.current = i; }}
            className={`cursor-pointer px-3 py-2 text-sm rounded-md ${opt.value === selected ? 'font-semibold' : ''} hover:bg-slate-100`}
          >
            {opt.label}
          </div>
        ))}
      </div>
    </div>
  );
}
