# UMiSF Client — Team Division (4 parts)

Goal
----
Split the `src/Views` work into four independent parts so 4 people or sub-teams can work in parallel with minimal overlap.

How to claim
------------
- Create a branch named `feature/part-<A|B|C|D>/<your-name>`.
- Add your name under the part you claimed and open a PR when ready.

Branch naming example
---------------------
- `feature/part-A/alice`  — Part A claimed by Alice

Workflow conventions
--------------------
- Run the dev server: `npm start` in the repository root (`umisf-client`).
- Keep changes scoped to files listed for your part.
- If you must touch shared files (router, `App.js`, global styles), open a short PR and note the dependency.

Parts
-----

Part A — Core / Public UI
- Responsibilities: site shell, public pages, global layout, navigation.
- Files/folders to own:
  - `src/App.js` and `src/Router/router.jsx`
  - `src/Views/HeaderPage/`
  - `src/Views/HomePage/`
  - `src/Views/AboutPage/`
  - `src/Views/DevelopersPage/`
  - `src/Views/ContactUsPage/`
  - `src/Views/PhotosPage/` (page shell and gallery integration)
  - `src/Views/DrawsPage/` and `src/Views/DrawEditPage/` (public draw views)
  - `src/Views/NotFoundPage/`, `src/Views/UnauthPage/`

Part B — Registration & Auth
- Responsibilities: user/company/university registration flows, login, uploaders, registration helpers.
- Files/folders to own:
  - `src/Views/RegistrationPage/` and its subfolders (`CompanyRegistration`, `PlayerRegistration`, `UniversityRegistration`, `RegisterAll`, common components)
  - `src/Views/LoginPage/`
  - `src/common/` registration helper components (e.g., `imageUploader`, `AddTable*`, `SuccessMessage`)
  - `src/Views/ProfileHeader/` (profile-related UI)

Part C — Admin area (heavy)
- Responsibilities: admin dashboards, user/company/university management, payments, messages, tournaments, admin gallery.
- Files/folders to own:
  - `src/Views/AdminHomePage/`
  - `src/Views/AdminNavbar/`
  - All `src/Views/Admin*` folders (Companies, Payments, Players, Messages, Tournament, Universities, UserAccounts, YearlyConfigurations, Gallery, Draws)
  - Any admin-specific shared components under `src/common/` if used only by admin

Part D — Scheduling, Results, Umpires, Organizer, Table, Timeline
- Responsibilities: match scheduling, results, organizers' and umpires' pages, timeline and photos subcomponents.
- Files/folders to own:
  - `src/Views/MatchSchedulePage/`
  - `src/Views/MatchResultsPage/`
  - `src/Views/OrganizerHomePage/`
  - `src/Views/UmpireHomePage/`
  - `src/Views/TableHomePage/`
  - `src/Views/TimelinePage/`
  - Related subcomponents in `src/Views/PhotosPage/` (AlbumCard, GalleryPage, PreviewBox)

PR checklist
------------
- Lint and format code (project follows CRA defaults; keep styling consistent).
- Ensure no unused imports remain.
- Limit changes to the claimed part; list any router or global changes in PR description.

If you want me to
------------------
- create the `feature/part-*` branches for named team members
- automatically assign files to specific team members in a matrix file
- or generate smaller tasks per view (create issues/PR templates)

Add claimed members below (edit this file to claim):

- Part A: 
- Part B: 
- Part C: 
- Part D: 
