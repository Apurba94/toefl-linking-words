/* Linking Words Trainer: choose the word that joins two ideas correctly. */
(function () {
  'use strict';
  const GROUPS = [['Contrast', 'however, nevertheless, although, whereas, despite, in contrast'], ['Result', 'therefore, as a result, consequently, so, thus'], ['Addition', 'moreover, in addition, furthermore, also'], ['Example', 'for example, for instance, such as'], ['Condition', 'unless, if, provided that'], ['Purpose', 'so that, in order to'], ['Sequence', 'first, next, then, finally'], ['Summary', 'overall, in conclusion, in short']];
  const App = {
    about: 'Linking words show how ideas connect, and the TOEFL writing tasks reward them when they are used correctly. Practise fifteen original questions on contrast, result, addition, example, condition, purpose, sequence, summary and emphasis, including the grammar difference between although and despite.',
    how: ['Learn the groups in **Groups**.', 'Choose the right linking word in **Practice**.', 'Watch the grammar: despite + noun, although + clause.'],
    tabs: [
      SK.bankTab('practice', 'Practice', (ctx) => ctx.data.linking, { sizes: [5, 10, 15] }),
      { id: 'groups', label: 'Groups', render(el) { el.appendChild(SK.card('Linking words by job', SK.table(['Job', 'Words'], GROUPS, false))); } },
    ],
    checks: { 'every question is valid': (data, assert) => { for (const it of data.linking) assert.deepEqual(SK.validateItem(it), []); } },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
