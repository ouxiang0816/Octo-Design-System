import { importExistingExcel, pollForQueuedJobs, runSyncJob } from "./jobs.js";

function getFlag(name: string) {
  const index = process.argv.indexOf(name);
  if (index === -1 || index === process.argv.length - 1) {
    return null;
  }
  return process.argv[index + 1] ?? null;
}

async function main() {
  const command = process.argv[2];

  if (command === "run-job") {
    const jobId = getFlag("--job-id");
    if (!jobId) {
      throw new Error("Missing --job-id");
    }
    await runSyncJob(jobId);
    return;
  }

  if (command === "poll") {
    const jobs = await pollForQueuedJobs();
    if (!jobs.length) {
      console.log("No queued jobs.");
      return;
    }
    for (const job of jobs) {
      console.log(`Running job ${job.id}`);
      await runSyncJob(job.id);
    }
    return;
  }

  if (command === "import-excel") {
    const owner = getFlag("--owner") ?? "excel-import";
    const count = await importExistingExcel(owner);
    console.log(`Imported ${count} component records.`);
    return;
  }

  throw new Error(`Unknown command: ${command}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
