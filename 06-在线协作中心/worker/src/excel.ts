import XLSX from "xlsx";
import { categorySheetMap, type ComponentRecord, formatComponentName } from "@octo-hub/shared";

export function buildWorkbookFromComponents(components: ComponentRecord[]) {
  const workbook = XLSX.utils.book_new();

  for (const [category, sheetName] of Object.entries(categorySheetMap)) {
    const rows = [
      ["组件名称", "状态", "Figma设计链接", "备注说明"],
      [`${sheetName} · 仅维护组件名称、状态、Figma设计链接、备注说明`, "", "", ""],
    ];

    for (const component of components.filter((item) => item.category === category)) {
      rows.push([
        formatComponentName(component),
        component.status,
        component.figma_url ?? "",
        component.note ?? "",
      ]);
    }

    const worksheet = XLSX.utils.aoa_to_sheet(rows);
    worksheet["!cols"] = [{ wch: 24 }, { wch: 12 }, { wch: 48 }, { wch: 28 }];
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  }

  return workbook;
}
