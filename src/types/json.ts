export type JSONPrimitive = string | number | boolean | null;

export type JSONValue = JSONPrimitive | JSONObject | JSONArray;

export type JSONObject = { [key: string]: JSONValue };

export type JSONArray = JSONValue[];

export type AnyJSON = JSONObject | JSONArray;

export type JSONPath = (string | number)[];