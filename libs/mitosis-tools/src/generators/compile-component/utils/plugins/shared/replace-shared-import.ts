import {MitosisComponent} from "@builder.io/mitosis";

export function replaceSharedImport(json: MitosisComponent, targetFramework: string) {
  json.imports = json.imports.map(jsonImport => {
    if (jsonImport.path === '@fundamental/mitosis/shared') {
      jsonImport.path = `@fundamental/${targetFramework}/shared`;
    }
    return jsonImport;
  });
  return json;
}
