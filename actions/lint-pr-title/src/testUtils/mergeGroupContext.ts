import { GitHubPayload, newContext } from ".";

import { Context } from "@actions/github/lib/context";
import { MergeGroupEvent } from "@octokit/webhooks-types";

const payload: GitHubPayload<MergeGroupEvent> = {
  token: "ghp_tokengoeshere",
  job: "pull-request",
  ref: "refs/heads/main",
  sha: "0123456789abcdef0123456789abcdef01234567",
  repository: "someorg/somerepo",
  repository_owner: "someorg",
  repository_owner_id: "9876543",
  repositoryUrl: "git://github.com/someorg/somerepo.git",
  run_id: "11111111111",
  run_number: "1",
  retention_days: "90",
  run_attempt: "1",
  artifact_cache_size_limit: "10",
  repository_visibility: "private",
  "repo-self-hosted-runners-disabled": false,
  "enterprise-managed-business-id": "",
  repository_id: "111222333",
  actor_id: "123456",
  actor: "someuser",
  triggering_actor: "someuser",
  workflow: ".github/workflows/pull-request.yml",
  head_ref: "someuser/branch",
  base_ref: "main",
  event_name: "merge_group",
  event: {
    action: "checks_requested",
    merge_group: {
      head_sha: "2ffea6db159f6b6c47a24e778fb9ef40cf6b1c7d",
      head_ref:
        "refs/heads/gh-readonly-queue/main/pr-104-929f8209d40f77f4abc622a499c93a83babdbe64",
      base_sha: "380387fbc80638b734a49e1be1c4dfec1c01b33c",
      base_ref: "refs/heads/main",
      head_commit: {
        id: "ec26c3e57ca3a959ca5aad62de7213c562f8c821",
        tree_id: "31b122c26a97cf9af023e9ddab94a82c6e77b0ea",
        message:
          "Merge pull request #2048 from octo-repo/update-readme\n\nUpdate README.md",
        timestamp: "2019-05-15T15:20:30Z",
        author: {
          name: "Codertocat",
          email: "21031067+Codertocat@users.noreply.github.com",
        },
        committer: {
          name: "Codertocat",
          email: "21031067+Codertocat@users.noreply.github.com",
        },
      },
    },
    repository: {
      id: 17273051,
      node_id: "MDEwOlJlcG9zaXRvcnkxNzI3MzA1MQ==",
      name: "octo-repo",
      full_name: "octo-org/octo-repo",
      private: true,
      owner: {
        login: "octo-org",
        id: 6811672,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY4MTE2NzI=",
        avatar_url: "https://avatars.githubusercontent.com/u/6811672?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/octo-org",
        html_url: "https://github.com/octo-org",
        followers_url: "https://api.github.com/users/octo-org/followers",
        following_url:
          "https://api.github.com/users/octo-org/following{/other_user}",
        gists_url: "https://api.github.com/users/octo-org/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/octo-org/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/octo-org/subscriptions",
        organizations_url: "https://api.github.com/users/octo-org/orgs",
        repos_url: "https://api.github.com/users/octo-org/repos",
        events_url: "https://api.github.com/users/octo-org/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/octo-org/received_events",
        type: "Organization",
        site_admin: false,
      },
      html_url: "https://github.com/octo-org/octo-repo",
      description: "My first repo on GitHub!",
      fork: false,
      url: "https://api.github.com/repos/octo-org/octo-repo",
      forks_url: "https://api.github.com/repos/octo-org/octo-repo/forks",
      keys_url: "https://api.github.com/repos/octo-org/octo-repo/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/octo-org/octo-repo/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/octo-org/octo-repo/teams",
      hooks_url: "https://api.github.com/repos/octo-org/octo-repo/hooks",
      issue_events_url:
        "https://api.github.com/repos/octo-org/octo-repo/issues/events{/number}",
      events_url: "https://api.github.com/repos/octo-org/octo-repo/events",
      assignees_url:
        "https://api.github.com/repos/octo-org/octo-repo/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/octo-org/octo-repo/branches{/branch}",
      tags_url: "https://api.github.com/repos/octo-org/octo-repo/tags",
      blobs_url:
        "https://api.github.com/repos/octo-org/octo-repo/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/octo-org/octo-repo/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/octo-org/octo-repo/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/octo-org/octo-repo/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/octo-org/octo-repo/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/octo-org/octo-repo/languages",
      stargazers_url:
        "https://api.github.com/repos/octo-org/octo-repo/stargazers",
      contributors_url:
        "https://api.github.com/repos/octo-org/octo-repo/contributors",
      subscribers_url:
        "https://api.github.com/repos/octo-org/octo-repo/subscribers",
      subscription_url:
        "https://api.github.com/repos/octo-org/octo-repo/subscription",
      commits_url:
        "https://api.github.com/repos/octo-org/octo-repo/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/octo-org/octo-repo/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/octo-org/octo-repo/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/octo-org/octo-repo/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/octo-org/octo-repo/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/octo-org/octo-repo/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/octo-org/octo-repo/merges",
      archive_url:
        "https://api.github.com/repos/octo-org/octo-repo/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/octo-org/octo-repo/downloads",
      issues_url:
        "https://api.github.com/repos/octo-org/octo-repo/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/octo-org/octo-repo/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/octo-org/octo-repo/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/octo-org/octo-repo/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/octo-org/octo-repo/labels{/name}",
      releases_url:
        "https://api.github.com/repos/octo-org/octo-repo/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/octo-org/octo-repo/deployments",
      created_at: "2014-02-28T02:42:51Z",
      updated_at: "2021-03-11T14:54:13Z",
      pushed_at: "2021-03-11T14:54:10Z",
      git_url: "git://github.com/octo-org/octo-repo.git",
      ssh_url: "org-6811672@github.com:octo-org/octo-repo.git",
      clone_url: "https://github.com/octo-org/octo-repo.git",
      svn_url: "https://github.com/octo-org/octo-repo",
      homepage: "",
      size: 300,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: false,
      has_downloads: true,
      has_wiki: false,
      has_pages: true,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 39,
      license: null,
      forks: 0,
      open_issues: 39,
      watchers: 0,
      default_branch: "main",
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "public",
      custom_properties: {},
    },
    organization: {
      login: "octo-org",
      id: 6811672,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjY4MTE2NzI=",
      url: "https://api.github.com/orgs/octo-org",
      repos_url: "https://api.github.com/orgs/octo-org/repos",
      events_url: "https://api.github.com/orgs/octo-org/events",
      hooks_url: "https://api.github.com/orgs/octo-org/hooks",
      issues_url: "https://api.github.com/orgs/octo-org/issues",
      members_url: "https://api.github.com/orgs/octo-org/members{/member}",
      public_members_url:
        "https://api.github.com/orgs/octo-org/public_members{/member}",
      avatar_url: "https://avatars.githubusercontent.com/u/6811672?v=4",
      description: "Working better together!",
    },
    sender: {
      login: "Codertocat",
      id: 21031067,
      node_id: "MDQ6VXNlcjIxMDMxMDY3",
      avatar_url: "https://avatars1.githubusercontent.com/u/21031067?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Codertocat",
      html_url: "https://github.com/Codertocat",
      followers_url: "https://api.github.com/users/Codertocat/followers",
      following_url:
        "https://api.github.com/users/Codertocat/following{/other_user}",
      gists_url: "https://api.github.com/users/Codertocat/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Codertocat/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/Codertocat/subscriptions",
      organizations_url: "https://api.github.com/users/Codertocat/orgs",
      repos_url: "https://api.github.com/users/Codertocat/repos",
      events_url: "https://api.github.com/users/Codertocat/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Codertocat/received_events",
      type: "User",
      site_admin: false,
    },
    installation: { id: 1, node_id: "MDEyOk9yZ2FuaXphdGlvbjY4MTE2NzI=" },
  },
  server_url: "https://github.com",
  api_url: "https://api.github.com",
  graphql_url: "https://api.github.com/graphql",
  ref_name: "main",
  ref_protected: true,
  ref_type: "branch",
  secret_source: "Actions",
  workflow_ref:
    "someorg/somerepo/.github/workflows/pull-request.yml@refs/heads/main",
  workflow_sha: "0123456789abcdef0123456789abcdef01234567",
  workspace: "/opt/actions-runner/_work/somerepo/somerepo",
  event_path: "/opt/actions-runner/_work/_temp/_github_workflow/event.json",
  path: "/opt/actions-runner/_work/_temp/_runner_file_commands/add_path_65bcb106-8b8e-4275-8061-2080df62c11e",
  env: "/opt/actions-runner/_work/_temp/_runner_file_commands/set_env_65bcb106-8b8e-4275-8061-2080df62c11e",
  step_summary:
    "/opt/actions-runner/_work/_temp/_runner_file_commands/step_summary_65bcb106-8b8e-4275-8061-2080df62c11e",
  state:
    "/opt/actions-runner/_work/_temp/_runner_file_commands/save_state_65bcb106-8b8e-4275-8061-2080df62c11e",
  output:
    "/opt/actions-runner/_work/_temp/_runner_file_commands/set_output_65bcb106-8b8e-4275-8061-2080df62c11e",
  action: "__run_2",
  action_repository: "",
  action_ref: "",
};

export const mergeQueueContext: Context = (() => {
  const { head_sha, head_ref } = payload.event.merge_group;

  const ctx = newContext(payload, head_sha, head_ref);

  return ctx;
})();
