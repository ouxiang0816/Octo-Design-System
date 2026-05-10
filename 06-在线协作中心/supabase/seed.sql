insert into public.component_records (
  system_id,
  name_en,
  name_zh,
  category,
  status,
  figma_url,
  note,
  owner,
  created_by,
  updated_by
)
values
  (
    'component.button',
    'Button',
    '按钮',
    'basic',
    '已有',
    'https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=17-1112',
    '示例种子数据，可在导入 Excel 后删除。',
    'design-system',
    'seed',
    'seed'
  )
on conflict (system_id) do nothing;
