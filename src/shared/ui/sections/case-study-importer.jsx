"use client";

import { useActionState } from "react";
import { importCaseStudyAction } from "@/app/case-study-import/actions";
import { ImportedCaseStudy } from "./imported-case-study";

/**
 * The whole of the importer's own interface: a file field and a button.
 *
 * There is nothing to style here on purpose. The page's subject is the case
 * study that comes out of it, so the control that puts one in stays out of the
 * way — no panel, no brand, no copy beyond what the control needs to be used.
 */
const INITIAL = { status: "idle" };

export function CaseStudyImporter() {
  const [state, action, pending] = useActionState(importCaseStudyAction, INITIAL);

  return (
    <>
      <form action={action} className="mx-auto flex max-w-xl flex-wrap items-center gap-3 px-5 py-8">
        <input
          type="file"
          name="file"
          accept=".pdf,.docx"
          required
          className="min-w-0 flex-1 text-sm"
        />
        <button type="submit" disabled={pending} className="rounded border px-4 py-2 text-sm disabled:opacity-60">
          {pending ? "Reading" : "Upload"}
        </button>

        {state.status === "error" ? (
          <p className="w-full text-sm text-red-600">{state.message}</p>
        ) : null}
      </form>

      {state.status === "success" ? <ImportedCaseStudy study={state.study} /> : null}
    </>
  );
}

export default CaseStudyImporter;
