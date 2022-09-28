import {MitosisComponent} from "@builder.io/mitosis";

export function replaceMitosisImports(json: MitosisComponent, targetFramework: string) {
  json.imports = json.imports.map(jsonImport => {
    const mitosisImportMatch = jsonImport.path.match(/@fundamental\/mitosis(.*)?/);
    if (mitosisImportMatch) {
      jsonImport.path = `@fundamental/${targetFramework}${mitosisImportMatch[1]}`;
    }
    return jsonImport;
  });
  return json;
}
