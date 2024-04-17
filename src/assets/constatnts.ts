export const report = {
  id: 10,
  test: {
    id: 10,
    name: "سارا حیدری",
    nationalId: "5548787765",
    age: 454,
    ageUnit: "year",
    gender: "female",
    date: "1403/01/20 03:52",
    doctorName: "دکتر مسعودی",
    senderRegistrationCode: "12",
    images: [
      {
        id: 1,
        url: "",
      },
      {
        id: 2,
        url: "",
      },
    ],
  },
  testTitle: null,
  note: null,
  sections: [
    {
      id: 2,
      sectionTitle: "CERVICOVAGINAL CYTOPATHOLOGY REPORT (PAP.SMEAR)",
      groups: [
        {
          title: "SPECIMEN TYPE",
          className: "d-flex",
          options: [
            {
              id: 1,
              type: "checkbox",
              className: null,
              label: "Conventional",
              value: false,
            },
            {
              id: 2,
              type: "checkbox",
              className: null,
              label: "Liquid-Based",
              value: true,
            },
            {
              id: 3,
              type: "checkbox",
              className: null,
              label: "Thin prep",
              value: false,
            },
            {
              id: 4,
              type: "checkbox",
              className: null,
              label: "E.Prep",
              value: false,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      sectionTitle:
        "SPECIMEN ADEQUACY: CERVICOVAGINAL CYTOPATHOLOGY REPORT (PAP.SMEAR)",
      groups: [
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 5,
              type: "checkbox",
              className: null,
              label: "Satisfactory for evaluation",
              value: false,
            },
            {
              id: 6,
              type: "checkbox",
              className: null,
              label: "Unsatisfactory for evaluation",
              value: true,
            },
          ],
        },
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 7,
              type: "checkbox",
              className: null,
              label: "Endocervical/Transformation zone cells are present",
              value: false,
            },
            {
              id: 8,
              type: "checkbox",
              className: null,
              label: "Scant cellularity",
              value: false,
            },
            {
              id: 9,
              type: "checkbox",
              className: null,
              label: "Obscured by blood",
              value: false,
            },
          ],
        },
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 10,
              type: "checkbox",
              className: null,
              label: "Absence of Endocervical/Metaplastic cells",
              value: false,
            },
            {
              id: 11,
              type: "checkbox",
              className: null,
              label: "Poor preservation",
              value: false,
            },
            {
              id: 12,
              type: "checkbox",
              className: null,
              label: "Obscured by inflammation",
              value: false,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      sectionTitle: "INTERPRETATION/RESULT",
      groups: [
        {
          title: null,
          className: "border pt-3",
          options: [
            {
              id: 13,
              type: "checkbox",
              className: null,
              label: "Negative for intraepithelial lesion of malignancy",
              value: false,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      sectionTitle: "ORGANISM",
      groups: [
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 14,
              type: "checkbox",
              className: null,
              label: "Trichomonas vaginalls",
              value: false,
            },
            {
              id: 15,
              type: "checkbox",
              className: null,
              label: "Mixed bacteria",
              value: false,
            },
          ],
        },
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 16,
              type: "checkbox",
              className: null,
              label:
                "Fungal organisms morphologically consistent with candida Spp",
              value: false,
            },
          ],
        },
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 17,
              type: "checkbox",
              className: null,
              label: "Shift in flora suggestive of bacterial vaginosis",
              value: false,
            },
          ],
        },
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 18,
              type: "checkbox",
              className: null,
              label: "Bacteria morphologically consistent with actinomyces Spp",
              value: false,
            },
          ],
        },
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 19,
              type: "checkbox",
              className: null,
              label: "chlamydia",
              value: false,
            },
            {
              id: 20,
              type: "checkbox",
              className: null,
              label: "Cellular changes consistent with herpes simplex virus",
              value: false,
            },
          ],
        },
      ],
    },
    {
      id: 6,
      sectionTitle: "Presence of inflammation",
      groups: [
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 21,
              type: "checkbox",
              className: null,
              label: "Mild",
              value: false,
            },
            {
              id: 22,
              type: "checkbox",
              className: null,
              label: "Moderate",
              value: false,
            },
            {
              id: 23,
              type: "checkbox",
              className: null,
              label: "severe",
              value: false,
            },
          ],
        },
      ],
    },
    {
      id: 7,
      sectionTitle: "OTHER NON-NEOPLASTIC FINDINGS",
      groups: [
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 24,
              type: "checkbox",
              className: null,
              label: "Reactive cellular changes associated with:",
              value: false,
            },
          ],
        },
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 25,
              type: "checkbox",
              className: null,
              label: "Inflammation",
              value: false,
            },
            {
              id: 26,
              type: "checkbox",
              className: null,
              label: "Inflammation (Includes typical Repair)",
              value: false,
            },
          ],
        },
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 27,
              type: "checkbox",
              className: null,
              label: "Radiation",
              value: false,
            },
            {
              id: 28,
              type: "checkbox",
              className: null,
              label: "Intrauterine Contraceptive Device (IUD)",
              value: false,
            },
          ],
        },
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 29,
              type: "checkbox",
              className: null,
              label: "Glandular cells status post hysterectomy",
              value: false,
            },
            {
              id: 30,
              type: "checkbox",
              className: null,
              label: "Atrophy",
              value: false,
            },
            {
              id: 31,
              type: "checkbox",
              className: null,
              label: "Atrophic vaginitis",
              value: false,
            },
            {
              id: 32,
              type: "checkbox",
              className: null,
              label: "Metaplasia",
              value: false,
            },
          ],
        },
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 33,
              type: "checkbox",
              className: null,
              label:
                "Endometrial cells present in a woman 45 years old or more",
              value: false,
            },
          ],
        },
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 34,
              type: "checkbox",
              className: null,
              label: "Squamous Metaplasia",
              value: false,
            },
            {
              id: 35,
              type: "checkbox",
              className: null,
              label: "Keratotic",
              value: false,
            },
            {
              id: 36,
              type: "checkbox",
              className: null,
              label: "Pregnancy associated changes",
              value: false,
            },
            {
              id: 37,
              type: "checkbox",
              className: null,
              label: "Other",
              value: false,
            },
          ],
        },
        {
          title: null,
          className: "border pt-3",
          options: [
            {
              id: 38,
              type: "checkbox",
              className: null,
              label: "Epithelial cell abnormalities",
              value: false,
            },
          ],
        },
      ],
    },
    {
      id: 8,
      sectionTitle: "SQUAMOUS CELLS",
      groups: [
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 39,
              type: "checkbox",
              className: null,
              label: "Atypical squamous cells",
              value: false,
            },
          ],
        },
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 40,
              type: "checkbox",
              className: null,
              label: "Of undetermined significance (ASC-US)",
              value: false,
            },
          ],
        },
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 41,
              type: "checkbox",
              className: null,
              label: "Can not exclude HSIL (ASC-H)",
              value: false,
            },
          ],
        },
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 42,
              type: "checkbox",
              className: null,
              label: "Low-Grade squamous intraepithelial lesion (LSIL)",
              value: false,
            },
            {
              id: 43,
              type: "checkbox",
              className: null,
              label: "HPV",
              value: false,
            },
          ],
        },
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 44,
              type: "checkbox",
              className: null,
              label: "High-Grade squamous intraepithelial lesion (HSIL)",
              value: false,
            },
          ],
        },
        {
          title: null,
          className: "d-flex",
          options: [
            {
              id: 45,
              type: "checkbox",
              className: null,
              label: "With features suspicious for invasion",
              value: false,
            },
          ],
        },
        {
          title: null,
          type: "checkboxes",
          className: "d-flex",
          options: [
            {
              id: 46,
              type: "checkbox",
              className: null,
              label: "Squamous cell carcinoma",
              value: false,
            },
          ],
        },
      ],
    },
    {
      id: 9,
      sectionTitle: "GLANDULAR CELLS",
      groups: [
        {
          title: null,
          type: "checkboxes",
          className: "d-flex",
          options: [
            {
              id: 47,
              type: "checkbox",
              className: null,
              label: "Atypical",
              value: false,
            },
          ],
        },
        {
          title: null,
          type: "checkboxes",
          className: "d-flex",
          options: [
            {
              id: 48,
              type: "checkbox",
              className: null,
              label: "Endocervical cells",
              value: false,
            },
            {
              id: 49,
              type: "checkbox",
              className: null,
              label: "Endometrial cells",
              value: false,
            },
            {
              id: 50,
              type: "checkbox",
              className: null,
              label: "Glandular cells, favor neoplasia",
              value: false,
            },
          ],
        },
        {
          title: null,
          type: "checkboxes",
          className: "d-flex",
          options: [
            {
              id: 51,
              type: "checkbox",
              className: null,
              label: "Glandular cells",
              value: false,
            },
            {
              id: 52,
              type: "checkbox",
              className: null,
              label: "Endocervical cells, favor neoplasia",
              value: false,
            },
          ],
        },
        {
          title: null,
          type: "checkboxes",
          className: "d-flex",
          options: [
            {
              id: 53,
              type: "checkbox",
              className: null,
              label: "Endocervical adenocarcinoma in situ",
              value: false,
            },
          ],
        },
        {
          title: null,
          type: "checkboxes",
          className: "d-flex",
          options: [
            {
              id: 54,
              type: "checkbox",
              className: null,
              label: "Adenocarcinoma",
              value: false,
            },
          ],
        },
        {
          title: null,
          type: "checkboxes",
          className: "d-flex",
          options: [
            {
              id: 55,
              type: "checkbox",
              className: null,
              label: "Endocervical",
              value: false,
            },
            {
              id: 56,
              type: "checkbox",
              className: null,
              label: "Extrauterine",
              value: false,
            },
            {
              id: 57,
              type: "checkbox",
              className: null,
              label: "Endometrial",
              value: false,
            },
            {
              id: 58,
              type: "checkbox",
              className: null,
              label: "Not Otherwise Specified (NOS)",
              value: false,
            },
          ],
        },
        {
          title: null,
          type: "checkboxes",
          className: "d-flex",
          options: [
            {
              id: 59,
              type: "checkbox",
              className: null,
              label: "Other malignant neoplasms",
              value: false,
            },
          ],
        },
      ],
    },
    {
      id: 10,
      sectionTitle: "Recommendation",
      groups: [
        {
          title: null,
          type: "checkboxes",
          className: "d-flex",
          options: [
            {
              id: 60,
              type: "checkbox",
              className: null,
              label: "Repeat Smear",
              value: false,
            },
            {
              id: 61,
              type: "checkbox",
              className: null,
              label: "Immediately",
              value: false,
            },
            {
              id: 62,
              type: "checkbox",
              className: null,
              label: "after treatment",
              value: false,
            },
            {
              id: 63,
              type: "checkbox",
              className: null,
              label: "In ___ Month(s)",
              value: false,
            },
          ],
        },
      ],
    },
    {
      id: 11,
      sectionTitle: "Comments",
      groups: [
        {
          title: null,
          className: "text-start fw-bold fs-5 mt-2",
          options: [
            {
              id: 64,
              type: "textArea",
              className: null,
              label: null,
              value:
                "utyutdu fghgcx kjukuy yufulf yukydkydtjuh tyyutyutdu fghgcx kjukuy yufulf yukydkydtj",
            },
          ],
        },
      ],
    },
  ],
};
