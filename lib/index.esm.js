import e from 'react';
import 'react-dom';
var n = function () {
  return (
    (n =
      Object.assign ||
      function (e) {
        for (var n, l = 1, t = arguments.length; l < t; l++) for (var a in (n = arguments[l])) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
        return e;
      }),
    n.apply(this, arguments)
  );
};
'function' == typeof SuppressedError && SuppressedError;
var l = function (l) {
    return 'link' === l.type ? e.createElement('a', { className: l.className, href: l.href }, l.children) : e.createElement('button', n({}, l), l.children);
  },
  t = function (n) {
    return e.createElement('div', { className: null == n ? void 0 : n.className, 'aria-label': null == n ? void 0 : n.value }, null == n ? void 0 : n.children);
  },
  a = function (n) {
    return e.createElement(l, { className: null == n ? void 0 : n.className, type: 'button', onClick: null == n ? void 0 : n.onClick }, null == n ? void 0 : n.children);
  },
  c = function (n) {
    return (null == n ? void 0 : n.active) ? e.createElement('div', { className: null == n ? void 0 : n.className }, null == n ? void 0 : n.children) : null;
  },
  o = function (n) {
    var l = n.show,
      t = n.onClose,
      a = n.onConfirm,
      c = n.options,
      o = c.content,
      i = c.okText,
      r = void 0 === i ? 'OK' : i,
      s = c.cancelText,
      u = void 0 === s ? 'Cancel' : s,
      m = c.message;
    if (!l) return null;
    return e.createElement(
      'div',
      { className: 'modal-overlay' },
      e.createElement(
        'div',
        { className: 'modal' },
        e.createElement('div', { className: 'modal-content' }, o && e.createElement('p', null, o), m && e.createElement('p', null, m)),
        e.createElement(
          'div',
          { className: 'modal-actions' },
          o && e.createElement('button', { onClick: t }, u),
          e.createElement(
            'button',
            {
              onClick: function () {
                t(), null == a || a();
              },
            },
            r
          )
        )
      )
    );
  },
  i = function (e) {
    return e.condition ? e.children : null;
  },
  r = function (e) {
    return e.children;
  },
  s = function () {
    return e.createElement(
      'svg',
      { viewBox: '64 64 896 896', focusable: 'false', 'data-icon': 'close', width: '1em', height: '1em', fill: 'currentColor', 'aria-hidden': 'true' },
      e.createElement('path', {
        d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z',
      })
    );
  },
  u = function (n) {
    var t,
      a = n.title,
      c = n.onCancel,
      o = n.onOk,
      i = n.className,
      r = n.confirmLoading,
      u = n.okButton,
      m = n.children;
    return e.createElement(
      'div',
      { className: 'modal-wrapper' },
      e.createElement(
        'div',
        { className: 'modal-content '.concat(i || '') },
        e.createElement(l, { onClick: c, type: 'button', className: 'modal-close-icon' }, n.closeIcon ? n.closeIcon : e.createElement(s, null)),
        a ? e.createElement('div', { className: 'modal-header' }, a) : null,
        e.createElement('div', { className: 'modal-body' }, m),
        e.createElement(
          'div',
          { className: 'modal-actions' },
          e.createElement('button', { onClick: c }, n.cancelText),
          e.createElement('button', { className: 'text-secondary '.concat(null !== (t = null == u ? void 0 : u.className) && void 0 !== t ? t : ''), onClick: o, disabled: r }, n.okText)
        )
      ),
      e.createElement(l, { onClick: c, type: 'button', className: 'modal-mask' })
    );
  },
  m = function (n) {
    return e.createElement('div', { className: null == n ? void 0 : n.className, 'aria-label': null == n ? void 0 : n.ariaLabel }, null == n ? void 0 : n.children);
  },
  d = function (n) {
    return e.createElement(
      l,
      {
        type: 'button',
        className:
          (null == n ? void 0 : n.value) === (null == n ? void 0 : n.activeTab) ? (null == n ? void 0 : n.className) + ' ' + (null == n ? void 0 : n.activeClass) : null == n ? void 0 : n.className,
        onClick: function () {
          return null == n ? void 0 : n.onClick(null == n ? void 0 : n.value);
        },
      },
      null == n ? void 0 : n.children
    );
  },
  v = function (n) {
    return e.createElement(
      'div',
      { className: null == n ? void 0 : n.className, style: { display: (null == n ? void 0 : n.value) === (null == n ? void 0 : n.activeTab) ? 'block' : 'none' } },
      null == n ? void 0 : n.children
    );
  },
  E = function (n) {
    return e.createElement('div', null, n.msg);
  },
  f = function (n) {
    e.createElement(
      'div',
      { className: 'toast-container', style: { left: 0 } },
      e.createElement(
        'div',
        { className: 'toast-content' },
        e.createElement('div', { className: 'toast-title' }, n.msg),
        n.description ? e.createElement('div', { className: 'toast-description' }, n.description) : null,
        e.createElement(l, { className: 'toast-button', type: 'button' }, 'Undo')
      )
    );
  },
  N = e.createContext(void 0),
  p = function (n) {
    var l = n.asChild,
      t = n.children,
      a = n.className,
      c = e.useContext(N),
      o = c.showTooltip,
      i = c.hideTooltip;
    return e.createElement(
      'div',
      {
        className: a,
        onMouseEnter: function () {
          l && o();
        },
        onMouseLeave: function () {
          l && i();
        },
      },
      t
    );
  },
  h = function (n) {
    var l = n.children;
    return e.useContext(N).isVisible ? e.createElement('div', { className: 'TooltipPortal' }, l) : null;
  },
  b = function (n) {
    var l = n.children,
      t = n.sideOffset;
    return e.createElement('div', { className: 'TooltipContent', style: { marginLeft: t } }, l);
  };
export {
  c as AccordionContent,
  t as AccordionItem,
  a as AccordionTrigger,
  i as Case,
  v as Content,
  r as Default,
  f as Error,
  m as List,
  o as Modal,
  u as ModalComponents,
  E as Success,
  b as TooltipContent,
  h as TooltipPortal,
  p as TooltipTrigger,
  d as Trigger,
};
//# sourceMappingURL=index.esm.js.map
