#!/usr/bin/python3
"""
Lists 10 commits (from the most recent to oldest) of the repository “rails” by the user “rails”.
Usage: ./list_commits.py <repository name> <owner name>
"""
import sys
import requests

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print("Error: Invalid number of arguments")
        print("Usage: ./list_commits.py <repository name> <owner name>")
        sys.exit(1)

    repo_name = sys.argv[1]
    owner_name = sys.argv[2]

    url = f"https://api.github.com/repos/{owner_name}/{repo_name}/commits"
    response = requests.get(url)

    if response.status_code != 200:
        print(f"Error: {response.status_code} - {response.json().get('message')}")
        sys.exit(1)

    commits = response.json()
    for commit in commits[:10]:
        sha = commit.get('sha')
        author_name = commit.get('commit').get('author').get('name')
        print(f"{sha}: {author_name}")

